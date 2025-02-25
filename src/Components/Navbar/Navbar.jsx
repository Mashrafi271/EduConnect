import React from 'react'
import './Navbar.css'
import logo from '../Assets/img_data/logo.png' // Corrected relative path using "../"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = React.useState("Home")

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" className="navbar-logo" />
                <p className="navbar-title">Educonnect</p>
            </div>

            <ul className="nav-menu">
                <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("teachers") }}><Link style={{ textDecoration: 'none' }} to='/teachers'>Teachers</Link>{menu === "teachers" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("students") }}><Link style={{ textDecoration: 'none' }} to='/students'>Students</Link>{menu === "students" ? <hr /> : <></>}</li>

            </ul>

            <div className="nav-login">
                <Link to="/login_signup">
                    <button>Login</button>
                </Link>
            </div>

        </div>
    )
}

export default Navbar

/* 363756261357-a00qp74lnhu8v7sktsn5scsr8av4cn33.apps.googleusercontent.com */