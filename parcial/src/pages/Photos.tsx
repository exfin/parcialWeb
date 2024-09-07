import { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import './styles/Photos.css'


class Photos extends Component{
    render(){
        return(

           <div className="photos-page">
                <Navbar></Navbar>
                <div className="photos-container">
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
                <Footer></Footer>
           </div>
        );
    }
}

export default Photos;