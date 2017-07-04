/**
 * Created by qoder on 16-7-23.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
const banner1 = require('../../../../../images/banner/banner1.jpg');
const banner2 = require('../../../../../images/banner/banner2.jpg');
const banner3 = require('../../../../../images/banner/banner3.jpg');


class Banner extends Component {
  componentDidMount() {
    var mySwiper = new Swiper('.swiper-container', {
      mode: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      autoplay: 3000,
    });
  }

  render() {
    return (
      <div className="slider">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Link to="/home/banner/1">
                <img src={banner1} alt="第一张图片"/>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link to="/home/banner/2">
                <img src={banner2}/>
              </Link>
            </div>
            <div className="swiper-slide">
              <Link to="/home/banner/3">
                <img src={banner3}/>
              </Link>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </ div >
    )
  }
}

export default Banner;
