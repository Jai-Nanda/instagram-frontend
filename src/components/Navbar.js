import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
import './Navbar.css'
const Navbar = () => {
    const {state, dispatch} = useContext(UserContext)
    const list = () => {
        if (state) {
            return (
                <ul className="nav-links">
                    <li className="active"><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/SignUp" className="non-active">SignUp</Link></li>
                    <li><Link to="/SignIn" className="non-active">SignIn</Link></li>
                    <li><Link to="/CreatePost" className="non-active">CreatePost</Link></li>
                </ul>
            )
        }
        else {
            <ul className="nav-links">
                    <li className="active"><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/SignUp" className="non-active">SignUp</Link></li>
                    <li><Link to="/SignIn" className="non-active">SignIn</Link></li>
                    <li><Link to="/CreatePost" className="non-active">CreatePost</Link></li>
                </ul>
        }
    }
    return (
        <>
            <nav>
                <div className="head"><Link to="/"><img src="#" alt="logo" className="logo"/></Link></div>
                {list()}
            </nav>
        </>
    )
}

export default Navbar