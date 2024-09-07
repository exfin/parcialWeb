import { Component } from "react";
import './styles/TopMakeupCard.css'

class TopMakeupCard extends Component{
    render(){
        return(

            <div className="top-makeup-card">
                <img className="top-makeup-image"></img>
                <h1 className="top-makeup-name">Nombre</h1>
                <h2 className="top-makeup-description">Descripción</h2>
            </div>
        );
    }
}

export default TopMakeupCard;