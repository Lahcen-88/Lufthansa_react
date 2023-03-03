import React, { Component } from 'react'
import Slider from "react-slick"
import "./Hotels.css"
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';

class Hotels extends Component {
  render() {

    const settings = {

      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
{
          breakpoint: 850,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className='hotel'>
        <div>
        <h5>These top destinations are just a click away</h5>
        <p>A diverse collection of destinations. The puropse is traveling the world in search of unique people, places and experiences, and you’re invited to follow along on the journey.</p>
        </div>
        <Slider {...settings} className='hoteis'>
        <div>
              <img src="fotos/Orlando.jpg" alt="..." />
              <h6>Hotels in Orlando</h6>
              <p>250 Hotels</p>
              <p>Average price: $160</p>
          </div>
          <div>
              <img src="fotos/Newyork.jpg" alt="..." />
              <h6>Hotels in New York</h6>
              <p>140 Hotels</p>
              <p>Average price: $135</p>
          </div>
          <div>
              <img src="fotos/london.jpg" alt="..." />
              <h6>Hotels in London</h6>
              <p>280 Hotels</p>
              <p>Average price: $145</p>
          </div>
          <div>
              <img src="fotos/lasvegas.jpg" alt="..." />
              <h6>Hotels in Las Vegas</h6>
              <p>200 Hotels</p>
              <p>Average price: $160</p>
          </div>
          <div>
              <img src="fotos/Rome.jpg" alt="..." />
              <h6>Hotels in Rome</h6>
              <p>500 Hotels</p>
              <p>Average price: $130</p>
          </div>
          <div>
              <img src="fotos/Barcelona.jpg" alt="..." />
              <h6>Hotels in Barcelona</h6>
              <p>180 Hotels</p>
              <p>Average price: $165</p>
          </div>
          <div>
              <img src="fotos/Berlin.jpg" alt="..." />
              <h6>Hotels in Berlin</h6>
              <p>210 Hotels</p>
              <p>Average price: $140</p>
          </div>
          <div>
              <img src="fotos/Paris.jpg" alt="..." />
              <h6>Hotels in Paris</h6>
              <p>448 Hotels</p>
              <p>Average price: $170</p>
          </div>
          <div>
              <img src="fotos/Hongkong.jpg" alt="..." />
              <h6>Hotels in Hong Kong</h6>
              <p>406 Hotels</p>
              <p>Average price: $155</p>
          </div>
          <div>
              <img src="fotos/Melbourne.jpg" alt="..." />
              <h6>Hotels in Melbourne</h6>
              <p>300 Hotels</p>
              <p>Average price: $150</p>
          </div>
          <div>
              <img src="fotos/Auckland.jpg" alt="..." />
              <h6>Hotels in Auckland</h6>
              <p>634 Hotels</p>
              <p>Average price: $159</p>
          </div>
          <div>
              <img src="fotos/Toronto.jpg" alt="..." />
              <h6>Hotels in Toronto</h6>
              <p>180 Hotels</p>
              <p>Average price: $149</p>
          </div>
        </Slider>
        <div className='disc'>
          <h5>Discover further topics</h5>
        </div>
        <div className="card">
          <div className='container'>
            <div className='trav'>
              <img src="fotos/pic1.jpg" />
              <h4>Travel ID </h4>
              <p>Unlimited access to Lufthansa</p>
              <p>Group Airlines and Miles</p>
              <p>& More.</p>
            </div>
            <div className='digi'>
              <img src="fotos/pic2.jpg" />
              <h4>Digital service </h4>
              <p>Take care of the most important</p>
              <p>things for your trip while</p>
              <p>you are still at home.</p>
            </div>
            <div className='onli'>
              <img src="fotos/pic3.jpg" />
              <h4>Online check-in</h4>
              <p>Check in conveniently for your</p>
              <p>next flight from home or the</p>
              <p>office.</p>
            </div>
            <div className='flig'>
              <img src="fotos/pic4.jpg" />
              <h4>Flight disruptions</h4>
              <p>Find all services regarding flight</p>
              <p>delays or cancellation</p>
              <p>here.</p>
            </div>
          </div>
        </div>
        <ScrollUpButton />
      </div>
    )
  }

}

export default Hotels