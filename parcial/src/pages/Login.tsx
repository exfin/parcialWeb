import { Component } from "react";
import { Link } from "react-router-dom";
import './styles/login.css'


class Login extends Component{
    render(){
        return(

            <div className="pagina">
            <div className="container">
                <form className='form' >
                    <div className="header">
                        <p className="text">Login</p>
                        <div className="separador"></div>
                    </div>
                    <div className="inputs">
                        <div className="input">
                            <input type="text" placeholder="Username" required 
                            />
                        </div>
                        <div className="input">
                            <input type="password"  placeholder="Password" required
                           />
                        </div>
                    </div>
                    <div className="contBoton">
                        <button className="boton-submit"type="submit">Login</button>
                    </div>
                </form>
                <div className="link-registro">
                    <p>Don´t have an account? <Link to="/registro">Registry</Link></p>
                </div>
            </div>
        </div>
        );
    }
}

export default Login;