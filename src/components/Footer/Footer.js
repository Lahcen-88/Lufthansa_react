import React, { Component } from 'react'
import "./Footer.css"

export class Footer extends Component {
  render() {
    return (
        <div className='footer'>
          <div className='faq'>
            <div className='freq'>
              <h4>Frequently visited pages</h4>
              <h6>View & amend flights</h6>
              <h6>Offers & destinations</h6>
              <h6>Baggage</h6>
              <h6>Check-in</h6>
              <h6>At the airport</h6>
              <h6>In-flight services at a glance</h6>
            </div>
            <div className='cust'>
              <h4>Customer services</h4>
              <h6>Travel ID Account</h6>
              <h6>Miles & More</h6>
              <h6>Help & Contact</h6>
              <h6>Feedback</h6>
              <h6>Newsletter</h6>
              <h6>Sustainability</h6>
            </div>
            <div className='luft'>
              <h4>Lufthansa Group</h4>
              <h6>Jobs & careers</h6>
              <h6>Aviation Group</h6>
              <h6>Lufthansa Group Airlines</h6>
              <h6>Press</h6>
              <h6>Lufthansa partners</h6>
              <h6>Newsfeed</h6>
            </div>
            <div className='corp'>
              <h4>Corporate customers</h4>
              <h6>For travel agents</h6>
              <h6>For corporate customers</h6>
              <h6>Corporate bonus programme</h6>
              <h6>Corporate Changing world</h6>
              <h6>Diversity</h6>
              <h6>Bargain companies</h6>
            </div>
          </div>
          <div className='para'>
            <h6>
              <i className="fa-solid fa-arrow-right"></i> Imprint 
              <i className="fa-solid fa-arrow-right"></i> General Conditions of Carriage 
              <i className="fa-solid fa-arrow-right"></i> Data protection 
              <i className="fa-solid fa-arrow-right"></i> Passenger rights <i className="fa-solid fa-arrow-right"></i> Terms of use <i className="fa-solid fa-arrow-right"></i> Change Cookie Settings</h6>
          </div>
          <div className='down'>
            <p><span>C</span> All rights reserved</p>
            <section>
              <div>
                <p>Get connected with us on social networks:</p>
              </div>
              <div className='anchors'>
                  <a href="on"><i className="fa-brands fa-facebook fs-5"></i></a>
                  <a href="on"><i className="fa-brands fa-twitter fs-5"></i></a>
                  <a href="on"><i className="fa-brands fa-instagram fs-5"></i></a>
                  <a href="on"><i className="fa-brands fa-linkedin fs-5"></i></a>
                  <a href="on"><i className="fa-brands fa-github fs-5"></i></a>
              </div> 
            </section> 
          </div>  
        </div>
    )
  }
}

export default Footer