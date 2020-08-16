import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Background3D from './animations/Background3D';
import ParticlesCustom from "./animations/Particles"

const Layout = ({ children }) => (
    <>
        <Background3D/>
        <Header />
        <Footer />
        {children}
        <ParticlesCustom />
    </>
);

export default Layout;