import React from 'react';
import '../assets/styles/components/Main.scss';

const Main = () => {

    function toScroll () {
        let mainView = document.getElementsById("mainUp");
        
        document.addEventListener("scroll", function(){
            console.log(("bien"));
            // window.scroll(function(){
                if (document.documentElement.scrollTop > 0){
                    mainView.style.opacity = "0";
                    console.log("que tal");
                }
                else{
                    mainView.style.opacity = "1";
                }
            // })
        })
    }

    return (
        <div className="main">
            <div id="mainUp" className="mainUp">
                <h1 className="name"  >Fred Di Pasqua</h1>
                <p className="title" > Desarrollador | Creador | Artista</p>
                <p className="quote" >Aqui se supone debe de ir un quote 
                                        donde cada vez que abras la página
                                        cargue uno diferente</p>
                <p className="author" >Autor del Quote</p>
            </div>
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