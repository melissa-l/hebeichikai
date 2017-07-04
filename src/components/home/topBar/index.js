/**
 * Created by qoder on 16/10/1.
 */
import React, {Component} from  'react';
import {Link} from 'react-router';
import './index.css';

const TopBar = ()=> {
  return (
    <div className="topBarWrapper">
      <div className="login-bar">
        <Link to="/home/register">注册</Link>
        <Link to="/home/login">登录</Link>
      </div>
    </div>
  )
};

export default TopBar;
