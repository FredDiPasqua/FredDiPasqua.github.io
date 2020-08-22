import React from 'react';
import Particles from 'react-particles-js';
import '../../assets/styles/components/Particles.scss';

const ParticlesCustom = () => (
    <>
        <Particles className="particles" 
            params={{
                "particles": {
                    "number": {
                        "value": 100
                    },
                    "size": {
                        "value": 2
                    },
                    "color": {
                        "value": "#aaaa11"
                    },
                    // "shape": {
                    //     "type": "polygon"
                    // }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        }
                    },
                    "modes": {
                        "grab": {
                            "line_linked": {
                                "opacity": 0.9
                            }
                        }
                    }
                }
            }}
            
        />
        {/* <Particles className="particles"
            params={{
                "particles": {
                    "number": {
                        "value": 1,
                        // "density": {
                        //     "enable": true,
                        //     "value_area": 800
                        // }
                    },
                    "size": {
                        "value": 10
                    },
                    "color": {
                        "value": "#8877ff"
                    },
                    "opacity": {
                        "value": 1
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        // "onclick": {
                        //     "enable": true,
                        //     "mode": "push"
                        // }
                    }
                }

            }}    
        /> */}
    </>
);

export default ParticlesCustom;