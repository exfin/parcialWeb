import React, { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import AdminModelCard from "../components/AdminModelCard";
import AddModelCard from "../components/AddModelCard";
import AdminMakeupCard from "../components/adminMakeupCard";
import AddMakeupCard from "../components/AddMakeupCard";
import './styles/Admin.css';

interface ModelData {
    _id: string;
    name: string;
    description: string;
    profilePhoto: string;
    websiteLink: string;
    email: string;
}

interface MakeupData {
    _id: string;
    name: string;
    description: string;
    profilePhoto: string;
    price: number;
}

interface AdminState {
    models: ModelData[];
    makeups: MakeupData[];
}

class Admin extends Component<{}, AdminState> {
    state: AdminState = {
        models: [],
        makeups: []
    };

    async componentDidMount() {
        try {
            // Fetch models
            const modelResponse = await fetch("http://localhost:8080/api/model/getall"); 
            const models: ModelData[] = await modelResponse.json();
            this.setState({ models });

            // Fetch makeups
            const makeupResponse = await fetch("http://localhost:8080/api/makeup/getallComplete");
            const makeups: MakeupData[] = await makeupResponse.json();
            this.setState({ makeups });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    render() {
        const { models, makeups } = this.state;

        return (
            <div className="admin-page">
                <Navbar />
                
                <h1 className="title">Models:</h1>
                <div className="admin-container">
                    <AddModelCard />
                    {models.map((model) => (
                        <AdminModelCard
                            key={model._id}
                            model={model}
                        />
                    ))}
                </div>

                <h1 className="title">Make-Ups:</h1>
                <div className="admin-container">
                    <AddMakeupCard />
                    {makeups.map((makeup) => (
                        <AdminMakeupCard
                            key={makeup._id}
                            makeup={makeup}
                        />
                    ))}
                </div>

                <Footer />
            </div>
        );
    }
}

export default Admin;
