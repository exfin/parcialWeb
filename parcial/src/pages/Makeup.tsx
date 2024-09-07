import { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Makeupcard from "../components/Makeupcard";
import './styles/Makeup.css'
class Makeup extends Component{
    render(){
        return(

           <div className="makeup-page">
                <Navbar></Navbar>
                <div className="makeup-container">
                    <Makeupcard></Makeupcard>
                    <Makeupcard></Makeupcard>
                    <Makeupcard></Makeupcard>
                    <Makeupcard></Makeupcard>
                    <Makeupcard></Makeupcard>
                    <Makeupcard></Makeupcard>
                    <Makeupcard></Makeupcard>
                    <Makeupcard></Makeupcard>
                </div>
                <Footer></Footer>
            
           </div>
        );
    }
}

export default Makeup;