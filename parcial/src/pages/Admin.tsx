import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import AdminModelCard from "../components/AdminModelCard";
import AddModelCard from "../components/AddModelCard";
import AdminMakeupCard from "../components/AdminMakeupCard";
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
    isAuthenticated: boolean;
    loading: boolean;
}

class Admin extends Component<{}, AdminState> {
    state: AdminState = {
        models: [],
        makeups: [],
        isAuthenticated: false,
        loading: true, 
    };

    async componentDidMount() {
        const token = localStorage.getItem("token");

        if (!token) {
            this.setState({ isAuthenticated: false, loading: false });
            return;
        }

        try {
            
            const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/validate`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                this.setState({ isAuthenticated: true, loading: false });

                
                const modelResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/model/getall`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const models: ModelData[] = await modelResponse.json();
                this.setState({ models });

                
                const makeupResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/makeup/getallComplete`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const makeups: MakeupData[] = await makeupResponse.json();
                this.setState({ makeups });
            } else {
                this.setState({ isAuthenticated: false, loading: false });
            }
        } catch (error) {
            console.error("Error verifying token or fetching data:", error);
            this.setState({ isAuthenticated: false, loading: false });
        }
    }

    render() {
        const { models, makeups, isAuthenticated, loading } = this.state;

        if (loading) {
            
            return <div>Loading...</div>;
        }

        if (!isAuthenticated) {
            
            return <Navigate to="/login" />;
        }

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
