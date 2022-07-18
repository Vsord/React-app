import React from 'react';
import navbarClass from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={navbarClass.navbar}>
            <div className={navbarClass.navbar_menu}>
                <NavLink className={(navData) => navData.isActive ? navbarClass.active : ''} to="/profile">Profile</NavLink>
                <NavLink className={(navData) => navData.isActive ? navbarClass.active : ''} to="/messages">Messages</NavLink>
                <NavLink className={(navData) => navData.isActive ? navbarClass.active : ''} to="/news">News</NavLink>
                <NavLink className={(navData) => navData.isActive ? navbarClass.active : ''} to="/feed">Feed</NavLink>
                <NavLink className={(navData) => navData.isActive ? navbarClass.active : ''} to="/settings">Settings</NavLink>
            </div>
        </div>
    )
};

export default Navbar;