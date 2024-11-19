import './styles/Contact.css';

import linkedinIcon from '../assets/circle-linkedin.png';
import xIcon from '../assets/xIcon.png';
import youtubeIcon from '../assets/youtube.png';
import instagramIcon from '../assets/instagram.png';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_n7ldfzq', 'template_6tlmmfr', form.current, 'qDKedRmkQayq7A43k')
                .then((result) => {
                    console.log(result.text);
                    e.currentTarget.reset();
                    alert('Email Sent!');
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='your_name' required />
                    <input type="email" className="email" placeholder='Your Email' name='your_email' required />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' required></textarea>
                    <button type="submit" value="Send" className='submitBtn' >Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/mateus-trejos-65610b275/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="Linkedin" className="link" />
                        </a>
                        <a href="https://x.com/mateus_trejos" target="_blank" rel="noopener noreferrer">
                            <img src={xIcon} alt="Twitter" className="link" />
                        </a>
                        <a href="https://www.youtube.com/@mateustrejos3499" target="_blank" rel="noopener noreferrer">
                            <img src={youtubeIcon} alt="YouTube" className="link" />
                        </a>
                        <a href="https://www.instagram.com/mateuslt02/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
