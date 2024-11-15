import React, { Component } from "react";
import './styles/adminModelCard.css'

interface ModelData {
    _id: string;
    name: string;
    description: string;
    profilePhoto: string;
    websiteLink: string;
    email: string;
}

interface AdminModelCardProps {
    model: ModelData;
}

interface AdminModelCardState {
    modelData: ModelData;
}

class AdminModelCard extends Component<AdminModelCardProps, AdminModelCardState> {
    constructor(props: AdminModelCardProps) {
        super(props);
        this.state = {
            modelData: { ...props.model }
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

    handleUpdate = async () => {
        const { modelData } = this.state;
        try {
            const response = await fetch(`http://localhost:8080/api/model/edit/${modelData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(modelData)
            });
            
            if (response.ok) {
                alert("Model updated successfully!");
                window.location.reload(); // Reload the page on success
            } else {
                alert("Failed to update model");
            }
        } catch (error) {
            console.error("Error updating model:", error);
            alert("An error occurred while updating the model.");
        }
    };

    handleDelete = async () => {
        const { modelData } = this.state;
        try {
            const response = await fetch(`http://localhost:8080/api/model/delete/${modelData._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                alert("Model deleted successfully!");
                window.location.reload(); // Reload the page on success
            } else {
                alert("Failed to delete model");
            }
        } catch (error) {
            console.error("Error deleting model:", error);
            alert("An error occurred while deleting the model.");
        }
    };

    render() {
        const { modelData } = this.state;

        return (
            <div className="admin-model">
                <form className="admin-model-form" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        ID:
                        <input
                            type="text"
                            name="_id"
                            value={modelData._id}
                            disabled
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
                    <div className="admin-model-actions">
                        <button type="button" onClick={this.handleUpdate}>
                            Update Model
                        </button>
                        <button type="button" onClick={this.handleDelete} style={{ marginLeft: "10px", backgroundColor: "#d9534f", color: "white" }}>
                            Delete Model
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AdminModelCard;
