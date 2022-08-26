import React from "react";
import Navbar from "./Navbar";
import Buscador from "./Buscador";
import '../estilos/Styles.css'


const Header =()=>{
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <Navbar/>
                </div>
                <h2 class="fant">Bienvenido, millones de peliculas, programas de television y personas por descubrir.</h2>
                <h1>Explora ahora!</h1>
                <p>hola</p>
                <div className="col-md-12">
                    <Buscador/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;