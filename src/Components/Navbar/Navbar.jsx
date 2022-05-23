import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='Navbar_menu'>
                <a href="">Profile</a>
                <a href="">Messages</a>
                <a href="">News</a>
                <a href="">Feed</a>
                <a href="">Settings</a>
            </div>
        </div>
    )
};

export default Navbar;