import React, { Component } from 'react';
import Slider from "react-slick"
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';
import "./Carhire.css"

class Carhire extends Component {
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
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='car'>
          <div className='vehicle'>
            <h5>Car Rental & Much More</h5>
            <p>Enterprise Rent-A-Car provides more than just traditional car rental. We're your global transportation solution.</p>
            <button type="button" className='btn'>View all vehicles</button>
          </div> 
      <Slider {...settings}>
          <div>
              <img src="fotos/toyota.png" alt="..." />
              <h6>Toyota Corolla</h6>
              <p>$67 per day</p>
          </div>
          <div>
              <img src="fotos/renault.png" alt="..." />
              <h6>Renault Twin</h6>
              <p>$60 per day</p>
          </div>
          <div>
              <img src="fotos/hyundai.png" alt="..." />
              <h6>Hyundai Mazda</h6>
              <p>$54 per day</p>
          </div>
          <div>
              <img src="fotos/mercedes.png" alt="..." />
              <h6>Mercedes Benz</h6>
              <p>$87 per day</p>
          </div>
          <div>
              <img src="fotos/volkswagen.png" alt="..." />
              <h6>Wolkswagen Arena</h6>
              <p>$60 per day</p>
          </div>
          <div>
              <img src="fotos/dacia.png" alt="..." />
              <h6>Dacia Lux</h6>
              <p>$48 per day</p>
          </div>
          <div>
              <img src="fotos/peugeot.png" alt="..." />
              <h6>Peugeot 406</h6>
              <p>$52 per day</p>
          </div>
          <div>
              <img src="fotos/fiat.png" alt="..." />
              <h6>Fiat Palio</h6>
              <p>$64 per day</p>
          </div>
          <div>
              <img src="fotos/turbo.png" alt="..." />
              <h6>Turbo X</h6>
              <p>$58 per day</p>
          </div>
          <div>
              <img src="fotos/hyundai.png" alt="..." />
              <h6>Hyundai Express</h6>
              <p>$44 per day</p>
          </div>
          <div>
              <img src="fotos/renault.png" alt="..." />
              <h6>Renault Clio</h6>
              <p>$60 per day</p>
          </div>
          <div>
              <img src="fotos/fiat.png" alt="..." />
              <h6>Fiat 204</h6>
              <p>$57 per day</p>
          </div>
      </Slider>
      <ScrollUpButton />
    </div> 
    )
  }
}

export default Carhire