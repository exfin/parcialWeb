import { Link, NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import { useState, useEffect } from "react";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkTokenValidity = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setIsAuthenticated(false);
                return;
            }

            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/validate`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.isValid) {
                        setIsAuthenticated(true);
                    } else {
                        setIsAuthenticated(false);
                    }
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error('Error validating token:', error);
                setIsAuthenticated(false);
            }
        };

        checkTokenValidity();
    }, []);

    return (
        <nav>
            <Link to="/" className='titulos'>D'OR</Link>
            <div
                className="menu"
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                    <NavLink to="/photos">Photos</NavLink>
                </li>
                <li>
                    <NavLink to="/models">Models</NavLink>
                </li>
                <li>
                    <NavLink to="/makeup">Make Up</NavLink>
                </li>
                <li>
                    <NavLink to="/memberships">Memberships</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                {isAuthenticated ? (
                    <li>
                        <NavLink to="/admin">Admin</NavLink>
                    </li>
                ) : (
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    
                    </li>
                    
                )}
            </ul>
        </nav>
    );
};
