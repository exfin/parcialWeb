import  { Component, ChangeEvent, FormEvent } from "react";
import { Link, Navigate } from "react-router-dom";
import './styles/login.css';

interface LoginState {
  username: string;
  password: string;
  isAuthenticated: boolean;
}

class Login extends Component<{}, LoginState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAuthenticated: false
    };
  }

  async componentDidMount() {
    
    const token = localStorage.getItem("token");
    if (token) {
      try {
        
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/validate`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          
          this.setState({ isAuthenticated: true });
          console.log(true);
        }
      } catch (error) {
        console.error("Error verifying token:", error);
      }
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    } as Pick<LoginState, keyof LoginState>);
  };

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { username, password } = this.state;

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      if (data.success) {
        localStorage.setItem("token", data.token); 
        alert("Login successful!");
        this.setState({ isAuthenticated: true }); 
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error: any) {
      alert(`Login failed: ${error.message}`);
    }
  };

  render() {
    const { username, password, isAuthenticated } = this.state;

    if (isAuthenticated) {
      
      return <Navigate to="/admin" />;
    }

    return (
      <div className="pagina">
        <div className="container">
          <form className="form" onSubmit={this.handleSubmit}>
            <div className="header">
              <p className="text">Login</p>
              <div className="separador"></div>
            </div>
            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
              </div>
            </div>
            <div className="contBoton">
              <button className="boton-submit" type="submit">
                Login
              </button>
            </div>
          </form>
          <div className="link-registro">
            <p>
              Don’t have an account? <Link to="/registro">Registry</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
