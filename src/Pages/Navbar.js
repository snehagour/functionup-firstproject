import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import '../Pages/Navbar.css'
import Home from './Home'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <>
            <div className='header'>

                <nav className='navbar'>
                    
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                            : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className='nav-item'>
                            <Link to="Hom" smooth={true} offset={50} duration={100} onClick={closeMenu}>
                                <img className="img1" src='https://us.123rf.com/450wm/john79/john791702/john79170200044/john79170200044.jpg?ver=6' style={{ height: '55px', width: '60px' }}></img></Link>
                         </li>

                        <li className='nav-item'>
                            <Link to="Hom" smooth={true} offset={50} duration={100} onClick={closeMenu}>Home </Link>


                        </li>
                        <li className='nav-item'>
                            <Link to="Cla" smooth={true} offset={50} duration={100} onClick={closeMenu}>Classes </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="Abo" smooth={true} offset={50} duration={100} onClick={closeMenu}>About </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="Pri" smooth={true} duration={100} onClick={closeMenu}>Pricing </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="pi" smooth={true} duration={100} onClick={closeMenu}>Contact US </Link>


                        </li>
                        <li className='nav-item'>
                            <button className='btn2'><a className='joinus' href='./Registration'>Join US</a></button>
                        </li>

                    </ul>

                </nav>
            </div>
            <div className='Home'>
                <Home />
            </div>
                  
                        
        </>
    )
}

export default Navbar;  
