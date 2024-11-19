import React, { Component } from "react";
import './styles/AddModelCard.css';

interface ModelData {
    _id: string;
    name: string;
    description: string;
    profilePhoto: string;
    websiteLink: string;
    email: string;
}

interface AddModelCardState {
    modelData: ModelData;
}

class AddModelCard extends Component<{}, AddModelCardState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            modelData: {
                _id: "",
                name: "",
                description: "",
                profilePhoto: "",
                websiteLink: "",
                email: ""
            }
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            modelData: {
                ...prevState.modelData,
                [name]: value
            }
        }));
    };

    handleSubmit = async () => {
        const { modelData } = this.state;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/model/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(modelData)
            });

            if (response.ok) {
                alert("Model added successfully!");
                this.setState({
                    modelData: {
                        _id: "",
                        name: "",
                        description: "",
                        profilePhoto: "",
                        websiteLink: "",
                        email: ""
                    }
                });
                window.location.reload(); 
            } else {
                alert("Failed to add model");
            }
        } catch (error) {
            console.error("Error adding model:", error);
            alert("An error occurred while adding the model.");
        }
    };

    render() {
        const { modelData } = this.state;

        return (
            <div className="add-model">
                <form className="add-model-form" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        ID:
                        <input
                            type="text"
                            name="_id"
                            value={modelData._id}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={modelData.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={modelData.description}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Profile Photo URL:
                        <input
                            type="text"
                            name="profilePhoto"
                            value={modelData.profilePhoto}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Website Link:
                        <input
                            type="text"
                            name="websiteLink"
                            value={modelData.websiteLink}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={modelData.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="button" onClick={this.handleSubmit}>
                        Add Model
                    </button>
                </form>
            </div>
        );
    }
}

export default AddModelCard;
