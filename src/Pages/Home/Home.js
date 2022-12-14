import React from 'react';
import About from '../About/About';
import MyShop from '../MyShop/MyShop';
import ShowCase from '../ShowCase/ShowCase';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import './Home.css';
import MyServices from './MyServices/MyServices';


const Home = (props) => {
    return (
        <div className='home-div'>
            <Banner></Banner>
            <About></About>
            <ShowCase></ShowCase>
            <MyServices handleAddToBooking={props.handleAddToBooking}></MyServices>
            <MyShop addProduct={props.addProduct}></MyShop>
            <Contact></Contact>
        </div>
    );
};

export default Home;