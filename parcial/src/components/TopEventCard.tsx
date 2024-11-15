import React, { Component } from "react";
import './styles/TopEventCard.css';

interface EventData {
    _id: string;
    name: string;
    profilePhoto: string;
    date: string;
}

interface TopEventCardState {
    event: EventData | null;
}

class TopEventCard extends Component<{}, TopEventCardState> {
    state: TopEventCardState = {
        event: null
    };

    async componentDidMount() {
        try {
            const response = await fetch("http://localhost:8080/api/event/gettop"); // Replace with your actual endpoint
            const event: EventData = await response.json();
            this.setState({ event });
        } catch (error) {
            console.error("Error fetching random event:", error);
        }
    }

    render() {
        const { event } = this.state;

        return (
            <div className="top-event-card">
                {event ? (
                    <>
                        <img src={event.profilePhoto} alt={event.name} className="top-event-img" />
                        <h1 className="event-name">{event.name}</h1>
                        <h2 className="event-date">{new Date(event.date).toLocaleDateString()}</h2>
                    </>
                ) : (
                    <p>Loading event...</p>
                )}
            </div>
        );
    }
}

export default TopEventCard;
