import { Component } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import './styles/Admin.css'

class Admin extends Component{
    render(){
        return(

           <div className="admin-page">
                <Navbar></Navbar>
                <div className="admin-container">

                </div>
                <Footer></Footer>
           </div>
        );
    }
}

export default Admin;
