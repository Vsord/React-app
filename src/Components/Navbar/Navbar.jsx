import React from 'react'
import navbarClass from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={navbarClass.navbar}>
            <div className={navbarClass.navbar_menu}>
                <a href="/profile">Profile</a>
                <a href="/messages">Messages</a>
                <a href="/news">News</a>
                <a href="/feed">Feed</a>
                <a href="/settings">Settings</a>
            </div>
        </div>
    )
};

export default Navbar;