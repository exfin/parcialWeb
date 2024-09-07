import { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Eventcard from "../components/Eventcard";
import './styles/Events.css'

class Events extends Component{
    render(){
        return(

           <div className="events-page">
                <Navbar></Navbar>
                <div className="events-container">
                    <Eventcard></Eventcard>
                    <Eventcard></Eventcard>
                    <Eventcard></Eventcard>
                </div>
                <Footer></Footer>
            
           </div>
        );
    }
}

export default Events;