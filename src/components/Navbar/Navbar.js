import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return (
        <div className="menu py-3 ">
            <div className='px-3'>
                <h1> <i class="fa-solid fa-plane-departure"></i>Lufthansa Airline</h1>
            </div>
            <nav>
                <Link to="/" className='m-3 p-3'><i class="fa-solid fa-house"></i> Home</Link>
                <Link to="/flights" className='m-3 p-3'><i class="fa-solid fa-plane"></i> Flights</Link>
                <Link to="/hotels" className='m-3 p-3'><i class="fa-solid fa-hotel"></i> Hotels</Link>
                <Link to="/Rent-a-car" className='m-3 p-3' ><i class="fa-solid fa-car"></i> Rent a car</Link>
                <Link to="/contact" className='m-3 p-3'><i class="fa-solid fa-user"></i> Contact</Link>
            </nav>
        </div>
    );
  }
}

export default Navbar