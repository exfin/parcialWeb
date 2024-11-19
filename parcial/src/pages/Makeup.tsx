import  { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Makeupcard from "../components/Makeupcard";
import './styles/Makeup.css';


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

    
    async componentDidMount() {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/makeup/getall`); 
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
