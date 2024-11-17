import React, { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Eventcard from "../components/Eventcard";
import './styles/Events.css';


interface Model {
    _id: string;
    name: string;
    profilePhoto: string;
}

interface Makeup {
    _id: string;
    name: string;
    profilePhoto: string;
}

interface Event {
    _id: string;
    name: string;
    city: string;
    description: string;
    date: string;
    profilePhoto: string;
    models: Model[];
    makeup: Makeup[];
}

interface EventsState {
    events: Event[];
}

class Events extends Component<{}, EventsState> {
    state: EventsState = {
        events: []
    };

    async componentDidMount() {
        try {
            const response = await fetch("http://localhost:8080/api/event/getall"); 
            const events: Event[] = await response.json();
            this.setState({ events });
        } catch (error) {
            console.error("Error fetching events:", error);
        }
    }

    render() {
        return (
            <div className="events-page">
                <Navbar />
                <div className="events-container">
                    {this.state.events.map((event) => (
                        <Eventcard
                            key={event._id}
                            name={event.name}
                            city={event.city}
                            description={event.description}
                            date={event.date}
                            profilePhoto={event.profilePhoto}
                            models={event.models}
                            makeup={event.makeup}
                        />
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Events;
