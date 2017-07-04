/**
 * Created by qoder on 16/7/22.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import jumpTo from '../../../util/windowScroll';
import './index.css';


const weixin = require('../../../images/qrcode/qrcode_for_gh_1fa4e56b261a_258.jpg');

const Footer = ()=> {
  return (
    <div className="footer">
      <div className="foot-container">
        <dl className="footer-item">
          <dt className="title">驰凯智能产品</dt>
          <dd><Link onClick={()=>{jumpTo(0)}} to="/home/smartLock/lightLock/k80">智能锁</Link></dd>
          <dd><a onClick={()=>{jumpTo(0)}} href="javascript:;">智能门禁</a></dd>
        </dl>
        <dl className="footer-item">
          <dt className="title">驰凯服务</dt>
          <dd onClick={()=>{jumpTo(100)}}><Link to="/home/policy">上门安装</Link></dd>
          <dd onClick={()=>{jumpTo(350)}}><Link to="/home/policy">退货维修</Link></dd>
          <dd onClick={()=>{jumpTo(0)}}><Link to="/home/problem">常见问题</Link></dd>
        </dl>
        <dl className="footer-item">
          <dt className="title">关于驰凯</dt>
          <dd onClick={()=>{jumpTo(0)}}><Link to="/home/companyIntroduce">关于我们</Link></dd>
          <dd onClick={()=>{jumpTo(0)}}><Link to="/home/connectUs">联系我们</Link></dd>
          <a onClick={()=>{jumpTo(0)}} href="javascript:;">新闻中心</a>
        </dl>
        <dl className="footer-item">
          <div className="weixin">
            <img src={weixin} alt="驰凯科技"/>
            <br/>
            <b>“驰凯科技”微信服务号</b>
          </div>
          <p className="phone">全国服务热线<br/><b>0335-589-8687</b></p>
        </dl>
      </div>
      <div className="copyright">
        <p className="copyright-item">Copyright &copy; 2016 ickkey.com 河北驰凯科技有限公司&nbsp;&nbsp;版权所有 </p>
        <p>冀ICP备16021659号</p>
      </div>
    </div>
  )
};
export  default Footer;
