import React, { Component } from 'react'
import "./Form.css"
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton'

class Form extends Component {
  render() {
    return (
      <div className='form'>
        <div>
          <h4>Help and Contact</h4>
          <p>You will find a summary of the topics for the most frequently asked questions here. If you can’t find what you’re looking for, you can use the text search function or one of our various contact options.</p>
        </div>
        <form className='contact-form'>
          <div className="half">
            <div className="item">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" />
            </div>
            <div className="item">
              <label htmlFor="email">Email Address</label>
              <input type="text" id="email" />
            </div>
          </div>
          <div className="full">
            <label htmlFor="message">Message</label>
            <textarea id="message"></textarea>
          </div>
          <div className="action">
            <button type="button" className='btn'>Send</button>
          </div>
      </form>
      <ScrollUpButton />
    </div>
)
}
}

export default Form