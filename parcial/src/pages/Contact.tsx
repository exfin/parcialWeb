import { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ContactForm from '../components/Contact';
import './styles/Contact.css'

class Contact extends Component{
    render(){
        return(

            <div className="contact-page">
                <Navbar />
                <div className="contact-container">
                    <ContactForm />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;