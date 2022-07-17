import React from 'react'
import navbarClass from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={navbarClass.navbar}>
            <div className={navbarClass.navbar_menu}>
                <a href="/profile">Profile</a>
                <a href="/messages">Messages</a>
                <a href="">News</a>
                <a href="">Feed</a>
                <a href="">Settings</a>
            </div>
        </div>
    )
};

export default Navbar;