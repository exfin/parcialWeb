import { Component } from "react";
import './styles/TopEventCard.css'

class TopEventCard extends Component{
    render(){
        return(

            <div className="top-event-card">
                <img className="top-event-img"></img>
                <h1 className="event-name">Evento</h1>
                <h2 className="event-date">Fecha</h2>
            </div>
        );
    }
}

export default TopEventCard;