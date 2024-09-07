import { Component } from "react";
import './styles/TopModelCard.css'


class TopModelCard extends Component{
    render(){
        return(

            <div className="top-model-card">
                <img className="top-model-image"></img>
                <h1 className="top-model-name">Nombre</h1>
                <h2 className="top-model-booking">Descripción</h2>
            </div>
        );
    }
}

export default TopModelCard;