import { Component } from "react";
import './styles/Makeupcard.css'

class Makeupcard extends Component{
    render(){
        return(

            <div className="makeup-card">
                <img></img>
                <h1>Nombre</h1>
                <h3>Descripción</h3>
                <h2>$1000</h2>
            </div>
        );
    }
}

export default Makeupcard;