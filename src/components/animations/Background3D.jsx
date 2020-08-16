import React from 'react';
import * as THREE from 'three';
import '../../assets/styles/components/Background3D.scss'
import smoke from '../../assets/images/smoke.png'



class Background3D extends React.Component {
    
    componentDidMount() {
        var scene, sceneLight, portalLight, cam , renderer , clock, portalParticles = [], smokeParticles = [];

        function initScene() {
            scene = new THREE.Scene();
        
            sceneLight = new THREE.DirectionalLight(0xffffff, 0.5);
            sceneLight.position.set(0,0,1);
            scene.add(sceneLight);
        
            portalLight = new THREE.PointLight(0xac2a85, 30, 500, 1.7);
            portalLight.position.set(0, 0, 250 );
            scene.add(portalLight);
        
            cam = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
            cam.position.z = 1000;
            scene.add(cam);
        
            renderer = new THREE.WebGLRenderer();
            renderer.setClearColor(0x000000, 1);
            renderer.setSize(window.innerWidth , window.innerHeight);
            document.body.appendChild(renderer.domElement);
            // use ref as a mount point of the Three.js scene instead of the document.body
            // mount.appendChild( renderer.domElement );
        
            particleSetup();
        }
        function particleSetup() {
            let loader = new THREE.TextureLoader();
        
            loader.load(smoke, function (texture) {
                var portalGeo = new THREE.PlaneBufferGeometry(350, 350);
                var portalMaterial = new THREE.MeshStandardMaterial({
                    map:texture,
                    transparent: true
                });
                var smokeGeo = new THREE.PlaneBufferGeometry(1000, 1000);
                var smokeMaterial = new THREE.MeshStandardMaterial({
                    map:texture,
                    transparent: true
                });
        
                for(let p=880 ; p > 250 ; p--){
                    let particle = new THREE.Mesh(portalGeo, portalMaterial);
                    particle.position.set(
                        0.5 * p * Math.cos((4 * p * Math.PI) / 180),
                        0.5 * p * Math.sin((4 * p * Math.PI) / 180),
                        0.1 * p
        
                    );
                    particle.rotation.z = Math.random() * 360;
                    portalParticles.push(particle);
                    scene.add(particle);
        
                }
                for(let p=0 ; p > 40 ; p++){
                    let particle = new THREE.Mesh(smokeGeo, smokeMaterial);
                    particle.position.set(
                        Math.random() * 1000-500,
                        Math.random() * 400-200,
                        25
        
                    );
                    particle.rotation.z = Math.random() * 360;
                    particle.material.opacity = 0.4;
                    portalParticles.push(particle);
                    scene.add(particle);
        
                }
                clock = new THREE.Clock();
                animate();
            });
        };
        function animate() {
            let delta = clock.getDelta();
            portalParticles.forEach(p => {
                p.rotation.z -= delta * 1.5;
            });
            smokeParticles.forEach(p => {
                p.rotation.z -= delta * 0.;
            });
            if(Math.random() > 0.9) {
                portalLight.power = 150 + Math.random() * 200;
            }
            renderer.render(scene, cam);
            requestAnimationFrame(animate);
        }
        
        
        initScene();
    }

    render () {
        return (
            <div>
            
            </div>
            // <div ref={ref => (this.mount = ref)} />
        )
    }
};

export default Background3D;