import React, {Component} from 'react';
import SmartAnimat from '../smartAnimat';
import Management from "../../../../images/bannerBottom/smartCommunity/management.png";

import Manageleft from '../../../../images/bannerBottom/smartCommunity/manageleft.png';
import Manageright from '../../../../images/bannerBottom/smartCommunity/manageright.png';
import Menzha from '../../../../images/bannerBottom/smartCommunity/mencha.png';
import Chedisuo from '../../../../images/bannerBottom/smartCommunity/chedisuo.png';
import Menjin from '../../../../images/bannerBottom/smartCommunity/menjin.png';
import Managebottom from '../../../../images/bannerBottom/smartCommunity/xiaoquanfang.png';


const Banner = require('../../../../images/bannerBottom/smartCommunity/banner.png');

import './index.css';
class SmartCommuntity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smart: ''
    };
    this.show = this.show.bind(this);
  }


  show() {
    const img = {
      management: Management,
      managebottom: Managebottom,
      manageleft: Manageleft,
      manageright: Manageright,
      manageTopLeft: Menjin,
      manageTopCenter: Menzha,
      manageTopRight: Chedisuo
    };
    this.setState({
      smart: <div style={{paddingTop: 40}}>
        <SmartAnimat
          img={img}/>
      </div>
    })
  }

  render() {
    return (
      <div className="smartCommunity-wrapper smartFamily-wrapper">
        <div className="banner">
          <img src={Banner} onLoad={this.show}/>
        </div>
        {this.state.smart}
      </div>
    )
  }
}

export default SmartCommuntity;
