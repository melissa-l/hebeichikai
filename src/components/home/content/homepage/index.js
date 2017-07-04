/**
 * Created by qoder on 16/7/22.
 */
import React, {Component} from 'react';
import Banner from './banner';
import BottomTab from './bottomTab';
import 'swiper/dist/css/swiper.css';
import './index.css';
import 'swiper/dist/js/swiper';


class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Banner/>
        <BottomTab/>
      </div>
    )
  }
}

export  default  Homepage;
