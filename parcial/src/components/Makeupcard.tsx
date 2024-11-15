import React, { Component } from "react";
import './styles/Makeupcard.css';

interface MakeupcardProps {
    name: string;
    description: string;
    profilePhoto: string;
    price: number;
}

class Makeupcard extends Component<MakeupcardProps> {
    render() {
        const { name, description, profilePhoto, price } = this.props;

        return (
            <div className="makeup-card">
                <img src={profilePhoto} alt={name} className="makeup-photo" />
                <h1>{name}</h1>
                <h3>{description}</h3>
                <h2>${price.toFixed(2)}</h2>
            </div>
        );
    }
}

export default Makeupcard;
