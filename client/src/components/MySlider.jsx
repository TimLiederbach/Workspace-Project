//https://react-slick.neostack.com/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";

import './MySlider.css';

import BPark from '../bryantPark.jpg';
import Library from '../carousel-library-pic.jpg';
import CoffeeS from '../img-coffee-shop.jpg';
import WorkS from '../workspace4.jpeg';
import Restaurant from '../workspace5.jpeg';


class MySlider extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       workspaces: [],
    //       currentUser: null
    //    };
    //  //this.onChange = this.onChange.bind(this);
    // }
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
          <img src={CoffeeS} width="100%" height="500px" object-fit= "cover" />
          <h3>3</h3>
        </div>
        <div class= "fullwscreen">
          <img src={WorkS} width="100%" height="500px" object-fit= "cover" />
          <h3>4</h3>
        </div>
        <div class= "fullwscreen">
          <img src={Restaurant} width="100%" height="500px" object-fit= "cover" />
          <h3>5</h3>
        </div>
      </Slider>
    );
  }
};

export default MySlider;