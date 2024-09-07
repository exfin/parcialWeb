import { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import TopEventCard from "../components/TopEventCard";
import TopMakeupCard from "../components/TopMakeupcard";
import TopModelCard from "../components/TopModelCard";
import './styles/Home.css'

class Home extends Component{
    render(){
        return(

           <div className="home-page">
                <Navbar></Navbar>
                <div className="home-container">
                    <div className="home-greetings">
                    <h1>Welcome to the World of Glamour and Style</h1>

                        <h2 >
                            Step into [Designer Name]’s realm of creativity and beauty. From iconic events to stunning models and bold makeup, explore the art that sets new trends.<br />
                            Every project is a statement — unique and unforgettable. This is where fashion and power collide.
                        </h2>

                        <h2 >
                            Browse through, and see the magic for yourself. Ready to work with the best? Let’s create something extraordinary.
                        </h2>

                    </div>
                    <div className="home-presentation">
                        <TopEventCard></TopEventCard>
                        <TopMakeupCard></TopMakeupCard>
                        <TopModelCard></TopModelCard>
                    </div>
                    <div className="home-overview">
                        <p>
                            The brand stands for pushing boundaries, breaking the rules, and creating beauty in unconventional ways. It’s about empowerment and confidence for those who dare to stand out. While admired for its innovative looks and fierce models, there’s more behind the scenes — business ventures that often blur the lines of legality, reflecting the edgy, rebellious spirit of the brand.
                        </p>
                    </div>
                </div>
                <Footer></Footer>
           </div>
        );
    }
}

export default Home;