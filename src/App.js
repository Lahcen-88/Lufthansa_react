import React from 'react';
import Home from './components/Home/Home';
import Hotels from './components/Hotels/Hotels';
import Carhire from './components/Carhire/Carhire';
import Form from './components/Form/Form';
import Flights from './components/Flights/Flights';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Routes, Route} from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
    return(
        <div>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/flights' element={<Flights />} />
                    <Route path='/hotels' element={<Hotels />} />
                    <Route path='/Rent-a-car' element={<Carhire />} />
                    <Route path='/contact' element={<Form />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App;