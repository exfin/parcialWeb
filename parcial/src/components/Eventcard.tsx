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
                    <div className="div-modelo">
                        <img className="photo"></img>
                        <h1>Nombre</h1>
                    </div>
                    <div className="div-modelo">
                        <img className="photo"></img>
                        <h1>Nombre</h1>
                    </div> <div className="div-modelo">
                        <img className="photo"></img>
                        <h1>Nombre</h1>
                    </div> <div className="div-modelo">
                        <img className="photo"></img>
                        <h1>Nombre</h1>
                    </div> <div className="div-modelo">
                        <img className="photo"></img>
                        <h1>Nombre</h1>
                    </div> <div className="div-modelo">
                        <img className="photo"></img>
                        <h1>Nombre</h1>
                    </div> <div className="div-modelo">
                        <img className="photo"></img>
                        <h1>Nombre</h1>
                    </div> <div className="div-modelo">
                        <img className="photo"></img>
                        <h1>Nombre</h1>
                    </div> <div className="div-modelo">
                        <img className="photo"></img>
                        <h1>Nombre</h1>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Eventcard;
