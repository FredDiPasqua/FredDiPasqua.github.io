import React, { useEffect } from 'react';
import '../assets/styles/components/Main.scss';
import Biography from './Biography'

const Main = () => {

    function toScroll () {
        let mainView = document.getElementById("mainUp");
        let main = document.getElementById("main");

        
        window.addEventListener("scroll", () => {
            const scrolled = window.scrollY;
            if (scrolled <= 80) {
                let opacity1 = scrolled - 80;
                mainView.style.opacity = Math.abs(opacity1) / 100;
            } 
            else {
                mainView.style.opacity = "0";
            }
            main.style.top = `${scrolled}px` + 153;
        })
    }

    function toScrollBio () {
        let bioView = document.getElementById("mainBio");
        let nameView = document.getElementById("main");
        
        window.addEventListener("scroll", () => {
            const scrolled = window.scrollY;
            nameView.style.top = `${scrolled + 153}px`;    // aqui el problema
            if (scrolled <= 300) {
                let opacity2 = (scrolled - 70) / 300;
                // console.log(opacity2)
                bioView.style.opacity = opacity2;
            } 
            else {
                // console.log(("2"));
                bioView.style.opacity = ".7";
            }
            console.log(`scroll : ${scrolled}`);
            console.log(`top : ${bioView.style.top}`);
        })
    }

    useEffect(() => {
        toScroll()
        toScrollBio()
        ,[]
    });

    return (
        <>
            <div id="main" className="main">
                <div id="mainUp" className="mainUp">
                    <h1 className="name"  >Fred Di Pasqua</h1>
                    <p className="title" > Desarrollador | Creador | Artista</p>
                    <p className="quote" >Aqui se supone debe de ir un quote 
                                            donde cada vez que abras la página
                                            cargue uno diferente</p>
                    <p className="author" >Autor del Quote</p>
                </div>
            </div>
            <Biography />
        </>
    )
};

export default Main;