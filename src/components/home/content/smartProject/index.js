import React, {Component} from 'react';
import SmartAnimat from '../smartAnimat';
import './index.css';
import Banner from '../../../../images/bannerBottom/smartProject/banner.png';
import Management from "../../../../images/bannerBottom/smartProject/manage.png"
import Managebottom from '../../../../images/bannerBottom/smartProject/renliuzhinengfenxi.png';
import Manageleft from '../../../../images/bannerBottom/smartProject/manageleft.png';
import Manageright from '../../../../images/bannerBottom/smartProject/manageright.png';
import Mensuo from '../../../../images/bannerBottom/smartProject/mensuo.png';
import Dgdq from '../../../../images/bannerBottom/smartProject/dengguangdianqi.png';
import Zxzf from '../../../../images/bannerBottom/smartProject/zaixianzhifu.png';

class SmartProject extends Component {
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
      manageTopLeft: Mensuo,
      manageTopCenter: Dgdq,
      manageTopRight: Zxzf
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
      <div className="smartFamily-wrapper">
        <div className="banner">
          <img src={Banner} onLoad={this.show}/>
        </div>
        {this.state.smart}
      </div>
    )
  }
}

export default SmartProject;
