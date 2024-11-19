import React, { Component } from "react";
import './styles/AddMakeupCard.css'

interface MakeupData {
    _id: string;
    name: string;
    description: string;
    profilePhoto: string;
    price: number;
}

interface AddMakeupCardState {
    makeupData: MakeupData;
}

class AddMakeupCard extends Component<{}, AddMakeupCardState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            makeupData: {
                _id: "",
                name: "",
                description: "",
                profilePhoto: "",
                price: 0
            }
        };
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            makeupData: {
                ...prevState.makeupData,
                [name]: name === "price" ? parseFloat(value) : value
            }
        }));
    };

    handleSubmit = async () => {
        const { makeupData } = this.state;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/makeup/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(makeupData)
            });

            if (response.ok) {
                alert("Makeup added successfully!");
                this.setState({
                    makeupData: {
                        _id: "",
                        name: "",
                        description: "",
                        profilePhoto: "",
                        price: 0
                    }
                });
                window.location.reload();
            } else {
                alert("Failed to add makeup");
            }
        } catch (error) {
            console.error("Error adding makeup:", error);
            alert("An error occurred while adding the makeup.");
        }
    };

    render() {
        const { makeupData } = this.state;

        return (
            <div className="add-makeup-card">
                <form className="add-makeup-card-form" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        ID:
                        <input
                            type="text"
                            name="_id"
                            value={makeupData._id}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={makeupData.name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            type="text"
                            name="description"
                            value={makeupData.description}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Profile Photo URL:
                        <input
                            type="text"
                            name="profilePhoto"
                            value={makeupData.profilePhoto}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={makeupData.price}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="button" onClick={this.handleSubmit}>
                        Add Makeup
                    </button>
                </form>
            </div>
        );
    }
}

export default AddMakeupCard;
