
import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="head"><Link to="/"><img src="#" alt="logo" className="logo"/></Link></div>
                <ul className="nav-links">
                    <li className="active"><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/SignUp" className="non-active">SignUp</Link></li>
                    <li><Link to="/SignIn" className="non-active">SignIn</Link></li>
                    <li><Link to="/CreatePost" className="non-active">CreatePost</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar