/**
 * Created by qoder on 16/10/1.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import ckLogo from '../../../../images/logo/logo.png';
import './index.css';


class LoginBox extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-content">
          <div className="login-header">
            <img src={ckLogo} alt="驰凯科技有限公司"/>
            <p>账户登录</p>
          </div>
          <form className="login-form">
            <p><input type="text" placeholder="请输入手机号"/></p>
            <p><input type="text" placeholder="请输入密码"/></p>
            <p>
              <button>登录</button>
            </p>
          </form>
          <div className="login-bottom">
            <Link to="/home/register" className="left">注册账号</Link>
            <Link to="/home/forgetPass" className="right">忘记密码</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginBox;
