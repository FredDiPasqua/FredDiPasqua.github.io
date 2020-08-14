import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Background3D from './animations/Background3D';
<<<<<<< HEAD
import ParticlesCustom from "./animations/Particles"
=======
import ParticlesCustom from './animations/Particles'
>>>>>>> particles

const Layout = ({ children }) => (
    <>
        <Background3D/>
<<<<<<< HEAD
        <Header />
        {children}
        <Footer />
        <ParticlesCustom />
=======
        {children}
        <ParticlesCustom />
        <Header />
        <Footer />
>>>>>>> particles
    </>
);

export default Layout;