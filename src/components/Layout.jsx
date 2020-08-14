import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Background3D from './animations/Background3D';

const Layout = ({ children }) => (
    <>
        <Background3D/>
        <Header />
        {children}
        <Footer />
        <ParticlesCustom />
    </>
);

export default Layout;