import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/' className='nav-item'>Home</NavLink>
            <NavLink to='/about' className='nav-item'>About</NavLink>
            <NavLink to='/add-blog' className='nav-item'>Add Blog</NavLink>
            
        </nav>
    );
};

export default Navbar;