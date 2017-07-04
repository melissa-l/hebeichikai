/**
 * Created by qoder on 16/7/23.
 */
import React, {Component} from 'react';
import jumpTo from '../../../../util/windowScroll';
import {Link} from 'react-router';
import './index.css';
const weixin = require('../../../../images/qrcode/qrcode_for_gh_1fa4e56b261a_258.jpg');
const nav_phone_icon = require('../../../../images/nav_phone_icon.png');
class Connection extends Component {
  render() {
    const {show, hideContact}=this.props;
    return (
      <div
        onMouseLeave={hideContact}
        className="nav_connection"
        style={{display: show}}>
        <div className="weixin">
          <span>官方微信</span>
          <img src={weixin} alt="官方微信"/>
        </div>
        <div className="other">
          <span className="a_content">
            <ul>
              <li onClick={()=>{jumpTo(0)}}><Link to="/home/companyIntroduce">公司简介</Link></li>
              <li onClick={()=>{jumpTo(0)}}><Link to="/home/connectUs">联系与合作</Link></li>
            </ul>
            <img src={nav_phone_icon} className="phone_icon" alt="电话"/>
            <span className="phone">
              <p><strong>0335-589-8687</strong></p>
              <p>（周一到周日8:00-18:00）</p>
            </span>
          </span>
        </div>
      </div>
    )
  }
}


export  default Connection;
