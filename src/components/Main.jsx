import React from 'react';
import '../assets/styles/components/Main.scss';

const Main = () => {
    return (
        <div className="main">
            <h1 className="name"  >Fred Di Pasqua</h1>
            <p className="title" > Desarrollador | Creador | Artista</p>
            <p className="quote" >Aqui se supone debe de ir un quote 
                                    donde cada vez que abras la página
                                    cargue uno diferente</p>
            <p className="author" >Autor del Quote</p>
            <div className="bio">
                <p className="bioP" >Desarrollador Junior en tecnologias como React, bootstrap, sass, mongoDB, docker, etc.
                    Creador de Marca de Daho Industries.

                    Agencia en tecnologias 3D, desde impresión 3D, modelado 3D, diseño web, etc.
                </p>
            </div>
        </div>
    )
};

export default Main;