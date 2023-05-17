import React, { Component } from 'react'
import './Navebar.css'
import { Link } from 'react-router-dom';

class Navebar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <>
        <nav className='navbar'>
          <div className='main'>
            <p className='nave'>Navbar</p>
          </div >

          <ul className={this.state.clicked ? "nav ul active" : "nav ul"}>

            <li><Link to='home' target='_blank'>Home</Link></li>
            <li><Link to='/about' target='_blank'>About</Link></li>
            <li><Link to='/services' target='_blank'>Services</Link></li>
            <li><Link to='/page' target='_blank'>Page</Link></li>

          </ul>
          <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            


          </div>
        </nav>


        <div className='dis'>
          <img src="https://wallpaperaccess.com/full/12311.jpg" />
        </div>
      </>
    )
  }
}

export default Navebar
