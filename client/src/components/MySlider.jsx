//https://react-slick.neostack.com/
//Linda: got help from Billy; was told to route to only App.css
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";

import '../App.css';

import BPark from '../bryantPark.jpg';
import Library from '../carousel-library-pic.jpg';
import CoffeeS from '../img-coffee-shop.jpg';
import WorkS from '../workspace4.jpeg';
import Restaurant from '../workspace5.jpeg';


class MySlider extends Component {
    render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings} autoplay>
        <div class= "fullwscreen">
          <img src={BPark} />
          <h3>3</h3>
        </div>
        <div class= "fullwscreen">
          <img src={Library} />
          <h3>3</h3>
        </div>
        <div class= "fullwscreen">
          <img src={CoffeeS} />
          <h3>3</h3>
        </div>
        <div class= "fullwscreen">
          <img src={WorkS}  />
          <h3>4</h3>
        </div>
        <div class= "fullwscreen">
          <img src={Restaurant}  />
          <h3>5</h3>
        </div>
      </Slider>
    );
  }
};

export default MySlider;
