/**
 * Created by qoder on 16/10/1.
 */

import React, {Component} from 'react';
import logo from '../../../../images/logo/logo.png';
import './index.css';

class ForgetPass extends Component {
  render() {
    return (
      <div className="login-content">
        <div className="login-header">
          <img src={logo} alt="图片未加载成功"/>
          <p>忘记密码</p>
        </div>
        <form name="form" className="register-form" role="form">
          <div className="form-group">
            <input type="text"　placeholder="输入手机号"/>
          </div>
          <div className="form-group">
            <input type="text"　placeholder="验证码"　className="massage"/>
            <button className="mgsbtn">获取短信验证码</button>
          </div>
          <div className="form-group">
            <input type="text"　placeholder="输入密码"/>
          </div>
          <div className="form-group">
            <input type="text"　placeholder="再次输入密码"/>
          </div>
          <button　className="sign_up">提交</button>
        </form>
      </div>
    )
  }
}

export default ForgetPass;
