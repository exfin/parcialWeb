import React, { Component } from "react";
import './styles/adminMakeupCard.css'

interface MakeupData {
    _id: string;
    name: string;
    description: string;
    profilePhoto: string;
    price: number;
}

interface AdminMakeupCardProps {
    makeup: MakeupData;
}

interface AdminMakeupCardState {
    makeupData: MakeupData;
}

class AdminMakeupCard extends Component<AdminMakeupCardProps, AdminMakeupCardState> {
    constructor(props: AdminMakeupCardProps) {
        super(props);
        this.state = {
            makeupData: { ...props.makeup }
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

    handleUpdate = async () => {
        const { makeupData } = this.state;
        try {
            const response = await fetch(`http://localhost:8080/api/makeup/edit/${makeupData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(makeupData)
            });

            if (response.ok) {
                alert("Makeup updated successfully!");
                window.location.reload();
            } else {
                alert("Failed to update makeup");
            }
        } catch (error) {
            console.error("Error updating makeup:", error);
            alert("An error occurred while updating the makeup.");
        }
    };

    handleDelete = async () => {
        const { makeupData } = this.state;
        try {
            const response = await fetch(`http://localhost:8080/api/makeup/delete/${makeupData._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                alert("Makeup deleted successfully!");
                window.location.reload();
            } else {
                alert("Failed to delete makeup");
            }
        } catch (error) {
            console.error("Error deleting makeup:", error);
            alert("An error occurred while deleting the makeup.");
        }
    };

    render() {
        const { makeupData } = this.state;

        return (
            <div className="admin-makeup-card">
                <form onSubmit={(e) => e.preventDefault()}>
                <label>
                        ID:
                        <input
                            type="text"
                            name="_id"
                            value={makeupData._id}
                            disabled
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
                    <button type="button" onClick={this.handleUpdate}>
                        Update Makeup
                    </button>
                    <button type="button" onClick={this.handleDelete} style={{ marginLeft: "10px", backgroundColor: "#d9534f", color: "white" }}>
                        Delete Makeup
                    </button>
                </form>
            </div>
        );
    }
}

export default AdminMakeupCard;
