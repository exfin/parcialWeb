import React, { Component } from "react";
import './styles/TopMakeupCard.css';

interface MakeupData {
    _id: string;
    name: string;
    description: string;
    profilePhoto: string;
}

interface TopMakeupCardState {
    makeup: MakeupData | null;
}

class TopMakeupCard extends Component<{}, TopMakeupCardState> {
    state: TopMakeupCardState = {
        makeup: null
    };

    async componentDidMount() {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/makeup/gettop`); 
            const makeup: MakeupData = await response.json();
            this.setState({ makeup });
        } catch (error) {
            console.error("Error fetching random makeup:", error);
        }
    }

    render() {
        const { makeup } = this.state;

        return (
            <div className="top-makeup-card">
                {makeup ? (
                    <>
                        <img src={makeup.profilePhoto} alt={makeup.name} className="top-makeup-image" />
                        <h1 className="top-makeup-name">{makeup.name}</h1>
                        <h2 className="top-makeup-description">{makeup.description}</h2>
                    </>
                ) : (
                    <p>Loading makeup...</p>
                )}
            </div>
        );
    }
}

export default TopMakeupCard;
