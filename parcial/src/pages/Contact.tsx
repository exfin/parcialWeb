import { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import './styles/Contact.css'

class Contact extends Component{
    render(){
        return(

            <div className="contact-page">
                <Navbar></Navbar>
                <div className="contact-container">

                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Contact;