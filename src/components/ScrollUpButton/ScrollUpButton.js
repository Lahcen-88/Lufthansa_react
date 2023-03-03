import React, { Component } from 'react'
import "./ScrollUpButton.css"

class ScrollUpButton extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      show: false
    }
  }

  componentDidMount(){
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200){
        this.setState({ show: true })
      } else {
        this.setState({ show: false })
      }
    })
  }

  backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    render() {
    return (
      <div>
        {this.state.show && (
            <a className='go-up'onClick={this.backToTop}><i className="fa-solid fa-circle-arrow-up"></i></a>
        )}
      </div>
    )
  }
}

export default ScrollUpButton