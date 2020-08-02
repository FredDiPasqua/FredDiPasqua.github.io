import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Background3D from './animations/Background3D';
import ParticlesCustom from './animations/Particles'

const Layout = ({ children }) => (
    <>
        <Header />
        <ParticlesCustom />
        <Footer />
        {children}
        <Background3D/>
    </>
);

export default Layout;