import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Background3D from './animations/Background3D';

const Layout = ({ children }) => (
    <>
        <Header />
        <Footer />
        {children}
        <Background3D/>
    </>
);

export default Layout;