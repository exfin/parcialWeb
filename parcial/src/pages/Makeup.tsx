import React, { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Makeupcard from "../components/Makeupcard";
import './styles/Makeup.css';

// Define the types for Makeup
interface MakeupItem {
    _id: string;
    name: string;
    description: string;
    profilePhoto: string;
    price: number;
}

interface MakeupState {
    makeups: MakeupItem[];
}

class Makeup extends Component<{}, MakeupState> {
    state: MakeupState = {
        makeups: []
    };

    // Fetch all makeups from the backend when the component mounts
    async componentDidMount() {
        try {
            const response = await fetch("http://localhost:8080/api/makeup/getall"); // Replace with your actual endpoint
            const makeups: MakeupItem[] = await response.json();
            this.setState({ makeups });
        } catch (error) {
            console.error("Error fetching makeups:", error);
        }
    }

    render() {
        return (
            <div className="makeup-page">
                <Navbar />
                <div className="makeup-container">
                    {this.state.makeups.map((makeup) => (
                        <Makeupcard
                            key={makeup._id}
                            name={makeup.name}
                            description={makeup.description}
                            profilePhoto={makeup.profilePhoto}
                            price={makeup.price}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Makeup;
