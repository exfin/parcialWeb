import { Component } from "react";
import './styles/Eventcard.css';

class Eventcard extends Component {
    render() {
        return (
            <div className="event-card">
                <div className="event-info">
                    <h1>Nombre</h1>
                    <h2>Ciudad</h2>
                    <h3>Descripción</h3>
                    <h4>Fecha</h4>
                </div>
                <div className="event-photos">
                    <img src="https://via.placeholder.com/400x250" alt="Event Photo 1" />
                    <img src="https://via.placeholder.com/400x250" alt="Event Photo 2" />
                    <img src="https://via.placeholder.com/400x250" alt="Event Photo 3" />
                    <img src="https://via.placeholder.com/400x250" alt="Event Photo 4" />
                </div>
            </div>
        );
    }
}

export default Eventcard;
