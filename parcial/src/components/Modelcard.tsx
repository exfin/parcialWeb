import React, { Component } from "react";
import './styles/Modelcard.css';

interface Photo {
    _id: string;
    url: string;
}

interface ModelcardProps {
    name: string;
    description: string;
    profilePhoto: string;
    photos: Photo[];
}

class Modelcard extends Component<ModelcardProps> {
    render() {
        const { name, description, profilePhoto, photos } = this.props;

        return (
            <div className="model-card">
                <div className="model-info">
                    {/* Display profilePhoto in model-info */}
                    <img src={profilePhoto} alt="Profile" />
                    <h1>{name}</h1>
                    <h3>{description}</h3>
                </div>
                <div className="model-photos">
                    {/* Display additional photos in model-photos */}
                    {photos.map((photo) => (
                        <img key={photo._id} src={photo.url} alt="Model Photo" />
                    ))}
                </div>
            </div>
        );
    }
}

export default Modelcard;
