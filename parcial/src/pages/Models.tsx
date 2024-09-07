import { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import Modelcard from "../components/Modelcard";
import './styles/Models.css'

class Models extends Component{
    render(){
        return(

           <div className="models-page">
                <Navbar></Navbar>
                <div className="models-container">
                    <Modelcard></Modelcard>
                    <Modelcard></Modelcard>
                </div>
                <Footer></Footer>
           </div>
        );
    }
}

export default Models;