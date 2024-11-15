import React, { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import './styles/Photos.css';

// Define the type for a photo
interface Photo {
    _id: string;
    url: string;
    modelId: string;
}

interface PhotosState {
    photos: Photo[];
}

class Photos extends Component<{}, PhotosState> {
    state: PhotosState = {
        photos: []
    };

    // Fetch all photos from the backend when the component mounts
    async componentDidMount() {
        try {
            const response = await fetch("http://localhost:8080/api/photo/getall"); // Replace with your actual endpoint
            const photos: Photo[] = await response.json();
            this.setState({ photos });
        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    }

    render() {
        return (
            <div className="photos-page">
                <Navbar />
                <div className="photos-container">
                    {this.state.photos.map((photo) => (
                        <img
                            key={photo._id}
                            src={photo.url}
                            alt={`Photo of model ${photo.modelId}`}
                            className="photo"
                        />
                    ))}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Photos;
