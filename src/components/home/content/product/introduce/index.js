/**
 * Created by qoder on 16-7-23.
 */
import React, {Component} from 'react';
import './index.css';
const lockIntro1 = require('../../../../../images/lockIntro/1.jpg');
const lockIntro2 = require('../../../../../images/lockIntro/2.jpg');
const lockIntro3 = require('../../../../../images/lockIntro/3.jpg');
const lockIntro4 = require('../../../../../images/lockIntro/4.jpg');
const lockIntro5 = require('../../../../../images/lockIntro/5.jpg');
const lockIntro6 = require('../../../../../images/lockIntro/6.jpg');
const lockIntro7 = require('../../../../../images/lockIntro/7.jpg');
const lockIntro8 = require('../../../../../images/lockIntro/8.jpg');
const lockIntro9 = require('../../../../../images/lockIntro/9.jpg');

class Introduce extends Component {
  render() {
    return (
      <div className="introduce">
        <img src={lockIntro1} height='100%' alt=""/>
        <img src={lockIntro2} alt=""/>
        <img src={lockIntro3} alt=""/>
        <img src={lockIntro4} alt=""/>
        <img src={lockIntro5} alt=""/>
        <img src={lockIntro6} alt=""/>
        <img src={lockIntro7} alt=""/>
        <img src={lockIntro8} alt=""/>
        <img src={lockIntro9} alt=""/>
      </div>
    )
  }
}

export  default  Introduce;
