import React, { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Modelcard from "../components/Modelcard";
import './styles/Models.css';

interface Photo {
    _id: string;
    url: string;
}

interface Model {
    _id: string;
    name: string;
    description: string;
    profilePhoto: string;
    photos: Photo[];
}

interface ModelsState {
    models: Model[];
}

class Models extends Component<{}, ModelsState> {
    state: ModelsState = {
        models: []
    };

    async componentDidMount() {
        try {
            const response = await fetch("http://localhost:8080/api/model/getall&photos"); // Replace with your actual endpoint
            const models: Model[] = await response.json();
            this.setState({ models });
        } catch (error) {
            console.error("Error fetching models:", error);
        }
    }

    render() {
        return (
            <div className="models-page">
                <Navbar />
                <div className="models-container">
                    {this.state.models.map((model) => (
                        <Modelcard
                            key={model._id}
                            name={model.name}
                            description={model.description}
                            profilePhoto={model.profilePhoto}
                            photos={model.photos}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Models;
