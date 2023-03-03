import React, { Component } from 'react'
import "./Flights.css"
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton'

class Flights extends Component {
  render() {
    return (
      <div className='flight'>
        <div className='notice'>
          <h5>Current Flight Information</h5>
          <h6>Disruptions in Lufthansa flight schedule until 23. December</h6>
        </div>
        <div className="main-form">
          <form>
            <div className='one'>
              <div>
                <label>Full name</label>
                <input type="text"  required />
              </div>
              <div>
                <label>Email Address</label>
                <input type="email" required /> 
              </div>
              <div>
                <label>How many people</label>
                <select>
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                </select>
              </div>
            </div>
            <div className='two'>
              <div>
                  <label>Departing time</label>
                  <input type="text" required />
              </div>
              <div>
                  <label>Depart date</label>
                  <input type="date" required />
              </div>
              <div>
                  <label>Phone number</label>
                  <input type="number" required />
              </div>
            </div>
            <div className='botao'>
              <button type="button" className='btn'>Submit</button>
            </div>
          </form>
        </div>
        <div className='services'>
            <div>
              <h4>Your rental car</h4>
              <p>As a Lufthansa customer, enjoy exclusive benefits with our partners.</p>
            </div>
            <div>
              <h4>Additional services</h4>
              <p>Make your journey more comfortable with our additional services.</p>
            </div>
            <div>
              <h4>Your hotel from Booking.com</h4>
              <p>Our hotel partner offers you a range of accommodation worldwide at the best price.</p>
            </div>
          </div>
        <ScrollUpButton />
      </div>
    )
  }
}

export default Flights