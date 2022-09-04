import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/" className='item'>Home</Link>
            <Link to="/about/kimyang" className='item'>About</Link>
            <Link to="/posts" className='item'>Posts</Link>
            <Link to="/invoices" className='item'>Invoices</Link>
        </div>
    );
};

export default Header;