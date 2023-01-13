import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-scroll'
import '../Pages/Navbar.css'
import Home from './Home'



const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    const img1={height :"60px" , width:"60px" , borderRadius:"80%"
}

    return (
      <>
        <div className='header'>
        {/* <Router><switch><Route exact path='Log' element={<Log/>}/></switch></Router> */}

            <nav className='navbar'>
                {/* { <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a> } */}
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                 
                <li className='nav-item'>
                        {/* <a href='./About' onClick={closeMenu}>About</a> */}
                        <Link  to="Hom"  smooth={true} offset={50} duration={100} onClick={closeMenu}>
                        <img style={img1} src='https://us.123rf.com/450wm/john79/john791702/john79170200044/john79170200044.jpg?ver=6'></img></Link>
               {/* <Link  to="Hom"  smooth={true} offset={50} duration={100} onClick={closeMenu}><img src={Images} />  </Link> */}
                    </li>
                     
                    <li className='nav-item'>
                        {/* <a href='/' onClick={closeMenu}>Home</a> */}
                        <Link  to="Hom"  smooth={true} offset={50} duration={100} onClick={closeMenu}>Home </Link>
                                
                            
                    </li>
                    <li className='nav-item'>
                    <Link  to="Cla"  smooth={true} offset={50} duration={100} onClick={closeMenu}>Classes </Link>
                        {/* <a href='./Classes' onClick={closeMenu}>Classes</a> */}
                    </li>
                    <li className='nav-item'>
                        {/* <a href='./About' onClick={closeMenu}>About</a> */}
                        <Link  to="Abo"  smooth={true} offset={50} duration={100} onClick={closeMenu}>About </Link>
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#Pricing' onClick={closeMenu}>Pricing</a> */}
                        <Link  to="Pri"  smooth={true}  duration={100} onClick={closeMenu}>Pricing </Link>
                    </li>
                    <li className='nav-item'>
                    <Link  to="pi"  smooth={true}  duration={100} onClick={closeMenu}>Contact US </Link>
                        {/* <a href='#Pricing' onClick={closeMenu}>Pricing</a> */}
                       {/* <button className='btn1'> <a href='/Log'>Join Us</a></button> */}
                   

                    </li>
                    <li className='nav-item'>
                    <button className='btn2'><a className='joinus' href='./Registration'>Join US</a></button>
                        </li>

                </ul>
                
            </nav>
        </div>
       <Home/>
        </>
    )
}

export default Navbar;