import { Component } from "react";
import './styles/Modelcard.css';

class Modelcard extends Component {
    render() {
        return (
            <div className="model-card">
                <div className="model-info">
                    <img src="path-to-image.jpg" alt="Model" />
                    <h1>Nombre</h1>
                    <h3>Descripción</h3>
                </div>
                <div className="model-photos">
                    <img src="https://via.placeholder.com/400x250" alt="Photo 1" />
                    <img src="https://via.placeholder.com/400x250" alt="Photo 2" />
                    <img src="https://via.placeholder.com/400x250" alt="Photo 3" />
                    <img src="https://via.placeholder.com/400x250" alt="Photo 4" />
                    
                </div>
            </div>
        );
    }
}

export default Modelcard;
