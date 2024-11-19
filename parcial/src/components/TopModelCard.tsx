import  { Component } from "react";
import './styles/TopModelCard.css';

interface ModelData {
    _id: string;
    name: string;
    description: string;
    profilePhoto: string;
}

interface TopModelCardState {
    model: ModelData | null;
}

class TopModelCard extends Component<{}, TopModelCardState> {
    state: TopModelCardState = {
        model: null
    };

    async componentDidMount() {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/model/gettop`); 
            const model: ModelData = await response.json();
            this.setState({ model });
        } catch (error) {
            console.error("Error fetching random model:", error);
        }
    }

    render() {
        const { model } = this.state;

        return (
            <div className="top-model-card">
                {model ? (
                    <>
                        <img src={model.profilePhoto} alt={model.name} className="top-model-image" />
                        <h1 className="top-model-name">{model.name}</h1>
                        <h2 className="top-model-booking">{model.description}</h2>
                    </>
                ) : (
                    <p>Loading model...</p>
                )}
            </div>
        );
    }
}

export default TopModelCard;
