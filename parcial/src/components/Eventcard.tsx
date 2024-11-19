import  { Component } from "react";
import './styles/Eventcard.css';


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

interface EventcardProps {
    name: string;
    city: string;
    description: string;
    date: string;
    profilePhoto: string;
    models: Model[];
    makeup: Makeup[];
}

class Eventcard extends Component<EventcardProps> {
    render() {
        const { name, city, description, date, profilePhoto, models, makeup } = this.props;

        return (
            <div className="event-card">
                <div className="event-info">
                    <img src={profilePhoto} alt={name} className="event-info-background" />
                    <h1>{name}</h1>
                    <h2>{city}</h2>
                    <h3>{description}</h3>
                    <h4>{new Date(date).toLocaleDateString()}</h4>
                </div>
                <div className="event-photos">
                    {models.map((model) => (
                        <div className="div-modelo" key={model._id}>
                            <img src={model.profilePhoto} alt={`${model.name} photo`} className="photo" />
                            <h1>{model.name}</h1>
                        </div>
                    ))}
                    {makeup.map((makeupItem) => (
                        <div className="div-makeup" key={makeupItem._id}>
                            <img src={makeupItem.profilePhoto} alt={`${makeupItem.name} photo`} className="photo" />
                            <h1>{makeupItem.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Eventcard;
