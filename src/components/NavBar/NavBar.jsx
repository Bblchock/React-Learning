import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
	return <nav className='nav'>
		<div><NavLink to="/profile">Profile</NavLink></div>
		<div><NavLink to="/dialogs">Messages</NavLink></div>
		<div><NavLink to="/News">News</NavLink></div>
		<div><NavLink to="/Music">Music</NavLink></div>
		<div><NavLink to="/Settings">Settings</NavLink></div>
	</nav >
}

export default NavBar;

