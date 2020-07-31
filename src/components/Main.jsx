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
        </div>
    )
};

export default Main;