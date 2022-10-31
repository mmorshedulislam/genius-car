import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import FindUs from '../FindUs/FindUs';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <FindUs></FindUs>
           <Products></Products>
        </div>
    );
};

export default Home;