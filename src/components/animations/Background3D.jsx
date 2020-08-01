import React from 'react';
import * as THREE from 'three';
import '../../assets/styles/components/Background3D.scss'
import { Int8Attribute } from 'three';


class Background3D extends React.Component {

    componentDidMount() {
        let scene, camera;

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 1, 1000 );
            camera.position.z = 1;
            camera.position.x = 1.16;
            camera.position.y = -0.12;
            camera.position.z = 0.27;
    
            let ambient = new THREE.AmbientLight(0x555555);
            scene.add(ambient);
    
            var renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            scene.fog = new THREE.FogExp2(0x03544e, 0.001);
            renderer.setClearColor(scene.fog.color);
            // document.body.appendChild( renderer.domElement );
            // use ref as a mount point of the Three.js scene instead of the document.body
            render();
        }
        function render() {
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }
        init();




        this.mount.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x558822 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 2.8;

        var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        };
        animate();

    }

    render () {
        return (
            <div ref={ref => (this.mount = ref)} />
        )
    }
};

export default Background3D;