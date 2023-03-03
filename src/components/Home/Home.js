import React, { Component } from 'react'
import "./Home.css"
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton'

class Home extends Component {
    

    render() {
    return (
        <div className='home'>
        <h4>Lufthansa Company</h4>
        <p>The Lufthansa Company is a global aviation company with a total of more than 300 subsidiaries and equity investments. The Lufthansa Group is composed of the segments Network Airlines, Eurowings and Aviation Services.</p>
        <h4>Offers & destinations</h4>
        <p>Get inspired by our offers and fly with Lufthansa again to the most beautiful destinations worldwide.</p>
        <h4>With Lufthansa flight offers around the globe - book worldwide flights</h4>
        <p>Be inspired by our worldwide destinations, by distant lands and exotic landscapes, by ancient cultures and modern mega-cities. Take our great-value flights from continent to continent, from the northern hemisphere to the southern, from the polar night to the tropical rainforest. Whether you want to fulfil your holiday dream or are travelling to a business meeting in a distant country, with the great-value offers at lufthansa.com you will enjoy a safe and relaxed flight to your destination. To ensure you always find the lowest fare for your favourite destinations, you can use our best-price search. Simply enter your departure and destination airports and when you want to travel, and our best-price search will tell you how and when you can book especially low-cost flights to your destination.</p>
        <h4>Book quickly, fly in comfort</h4>
        <p>To make sure you arrive at your destination with as little stress as possible, you can expect practical support from Lufthansa when booking, checking in and on board your flight. Use our Lufthansa app and search on your smartphone or tablet for your great-value flight, which you can then also book with the app. You can also check in via the app or on a PC to avoid queues and additional stress at the airport. An electronic boarding pass turns your mobile phone into a ticket for one of our modern aircraft.
        You will love our excellent range of entertainment, especially on long-haul routes: the latest feature films, popular TV series and fascinating documentaries are included in the Lufthansa video programme. You can also play short video games on our entertainment consoles or listen to your favourite music. You can also go online with your smartphone, tablet or notebook via Lufthansa FlyNet® while flying high above the clouds. In addition, on your flight booked via lufthansa.com, you can enjoy delicious meals and a large selection of alcoholic and non-alcoholic beverages. Even if the flight you booked at lufthansa.com takes you to the other side of the world, you will arrive there feeling relaxed and rested.</p>
        <button type="button" className='btn'>Company portrait</button>
        <ScrollUpButton />
    </div>
    )
}
}

export default Home
