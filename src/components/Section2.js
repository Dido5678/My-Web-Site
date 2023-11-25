import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css';
import Meat from '../assets/icons/meat.png';
import Forkspoon from '../assets/icons/forkspoon.png';
import Drink from '../assets/icons/drinks.png';
import Main from '../context/Main';
// import Dessert from '../context/Dessert';
// import Drinks from '../context/Drinks';



const Section2 = () => {
    return (
        <>
        <div className='section2-container'>
            <h3 className='ourMenu'>OUR MENU</h3>
            <h2 className='discoverMenu'>Discover Our Exclusive Menu</h2>
            <div className='content'>
                <Link to="/Main">
                    <img src={Meat} alt="Meat Icon" style={{ width: '30px', height: '30px' }} />
                    <span className='section2-menu'>Main</span>
                </Link>
                <Link to="/Dessert" >
                    <img src={Forkspoon} alt="Fork and Spoon Icon" style={{ width: '30px', height: '30px' }} />
                    <span className='section2-menu'>Dessert</span>
                </Link>
                <Link to="/Drinks">
                    <img src={Drink} alt="Drink Icon" style={{ width: '30px', height: '30px' }} />
                    <span className='section2-menu'>Drinks</span>
                </Link>
            </div>
        
        </div>
      </>
      )
  };
  
  export default Section2;