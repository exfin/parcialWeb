
import { Link, NavLink } from 'react-router-dom';
import './styles/Navbar.css'

import { useState } from "react";

export const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false)

    return(
                <nav> 
                    <Link to="/" className='titulos'>D'OR</Link>
                    <div className="menu" onClick={() => {
                        setMenuOpen(!menuOpen);
                    }}>
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
                            <NavLink to ="/models">Models</NavLink>
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
                    </ul> 
                </nav>
    );
}