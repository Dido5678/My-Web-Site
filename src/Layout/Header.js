import React, { useState } from 'react';
import "../../src/App.css";
import  "../assets/global.css";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
  <header className='header'>
      <div className='header-container'> 
      <div className='header-body'>
        <div className="header-tasty active">Tasty</div>
        <ul className='header-nav'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/specialties">Specialties</Link></li>
              <li><Link to="/reservation">Reservation</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
         <div className="header-burger" onClick={() => setIsOpen(!isOpen)}>
          <span>
            <Hamburger />
            <div className="header-M">Menu</div>
          </span>  
        </div> 
        <nav className='header-menu'>
        {isOpen?  
          <ul className='header-list'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/specialties">Specialties</Link></li>
              <li><Link to="/reservation">Reservation</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>:null}   
          </nav>
          </div>
       </div>
    </header>
    </>
  );
};

export default Header;