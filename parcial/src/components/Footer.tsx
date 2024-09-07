import { TiSocialYoutube } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import './styles/Footer.css'

export const Footer = () => {
   
        return (
            <footer className='piePag'>
                <p className='textoFooter'>&copy; {new Date().getFullYear()} - All rights reserved</p>
                <div className='contact-info'>
                    <h2>Contact Us</h2>
                    <p>caracortada@gmail.com</p>
                    <p>+1 (555) 555-1234</p>
                    <div className="socialmedia-icons">
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <TiSocialYoutube className="contact-icon" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <BsTwitterX className="contact-icon" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="contact-icon" />
                        </a>
                    </div>

                </div>
            </footer>
        );
    
}

