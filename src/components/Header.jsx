import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/components/Header.scss';

const Header = () => {
    return (
        <div className="header" >
            <NavLink className="links" to="/" >Inicio</NavLink>
            <NavLink className="links" to="/projects" >Proyectos</NavLink>
            <NavLink className="links" to="/art" >Arte</NavLink>
            <NavLink className="links" to="/colaborations" >Colaboración</NavLink>
        </div>

    )

};

export default Header;