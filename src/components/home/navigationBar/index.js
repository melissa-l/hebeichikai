/**
 * Created by qoder on 16/7/22.
 */
import React, {Component} from 'react';
import Contact from '../plugins/contact_us';
import {Link} from 'react-router';
import jumoTo from '../../../util/windowScroll';
import './index.css';
const logo = require('../../../images/logo.png');

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_contact: 'none'
    };
    this._showContact = this._showContact.bind(this);
    this._hideContact = this._hideContact.bind(this);
  }

  _showContact() {
    this.setState({
      is_contact: 'block'
    })
  }

  _hideContact() {
    this.setState({
      is_contact: 'none'
    })
  }

  render() {
    return (
      <div className="nav">
        <ul className="menu">
          <li className="menu_item" onClick={()=>{jumoTo(0)}}>
            <Link to='/home/main' activeClassName='menu_a_index_home'>
              <span className="text">首页</span>
            </Link>
          </li>
          <li className="menu_item">
            <a href="javascript:;" onClick={()=>{jumoTo(0)}}>
              <span className="text">产品</span>
            </a>
            <div className="menu_child menu_child_service_support">
              <ul>
                <li className="item" onClick={()=>{jumoTo(0)}}>
                  <Link to="/home/smartLock/lightLock/k80">
                    <span className="text">智能门锁</span></Link>
                </li>
                <li className="item" onClick={()=>{jumoTo(0)}}>
                  <Link to="/">
                    <span className="text">智能门禁</span></Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="menu_item" onMouseOver={this._hideContact}>
            <a href="javascript:;" onClick={()=>{jumoTo(0)}}>
              <span className="text">服务与支持</span>
            </a>
            <div className="menu_child menu_child_service_support">
              <ul>
                <li className="item" onClick={()=>{jumoTo(0)}}>
                  <Link to="/home/fullVersion">
                    <span className="text">下载</span></Link>
                </li>
                <li className="item" onClick={()=>{jumoTo(0)}}>
                  <Link to="/home/policy">
                    <span className="text">售后服务</span></Link>
                </li>
                <li className="item">
                  <Link to="/home/problem" onClick={()=>{jumoTo(0)}}>
                    <span className="text">常见问题</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="menu_item"
              onMouseOver={this._showContact}>
            <a href="javascript:;">
              <span className="text">关于我们</span>
            </a>
          </li>
        </ul>
        <Link to='/home/main' className="logo_outer">
          <img src={logo} className="logo logo_inner"/>
        </Link>
        <Contact show={this.state.is_contact} hideContact={this._hideContact}/>
      </div>
    )
  }
}

export  default NavigationBar;
