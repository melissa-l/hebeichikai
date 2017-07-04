/**
 * Created by qoder on 16/7/22.
 */
import React  from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from '../components/Main';
import Content from '../components/home/content';
import HomePage from '../components/home/content/homepage';
import Product from '../components/home/content/product';
import Introduce from '../components/home/content/product/introduce';
import Specification from '../components/home/content/product/specification';
import FullVersion from '../components/home/content/download/fullVersion';
import BateVersion from '../components/home/content/download/bateVersion';
import Policy from '../components/home/content/service/policy';
import CompanyProfile from '../components/home/content/companyProfile';
import Problem from '../components/home/content/service/problem';
import SmartLock from '../components/home/content/smartLock';
import ConnectUs from  '../components/home/content/connectUs';
import LightLock from '../components/home/content/smartLock/lightLock';
import CompanyIntroduce from '../components/home/content/companyIntroduce';
import LockIntroduce from '../components/home/content/lockIntroduce';
import BannerLink from '../components/home/content/bannerLink';
import SmartFamily from '../components/home/content/smartFamily';
import SmartCommunity from '../components/home/content/smartCommunity';
import SmartProject from '../components/home/content/smartProject';
import LoginBox from '../components/home/auth/login';
import RegisterBox from '../components/home/auth/register';
import ForgetPass from '../components/home/auth/forgetPass';

function RouterApp() {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Content}/>
        <Route path="/home" component={Content}>
          <Route path="main" component={HomePage}/>
          <Route path="product" component={Product}>
            <Route path="introduce" component={Introduce}/>
            <Route path="specification" component={Specification}/>
          </Route>
          <Route path="bateVersion" component={BateVersion}/>
          <Route path="fullVersion" component={FullVersion}/>
          <Route path="policy" component={Policy}/>
          <Route path="problem" component={Problem}/>
          <Route path="companyProfile" component={CompanyProfile}/>
          <Route path="smartLock" component={SmartLock}>
            <Route path="lightLock" component={LightLock}>
              <Route path=':version' component={LockIntroduce}/>
            </Route>
            <Route path=":version" component={LockIntroduce}/>
          </Route>
          <Route path="connectUs" component={ConnectUs}/>
          <Route path="companyIntroduce" component={CompanyIntroduce}/>
          <Route path="banner/:linkNum" component={BannerLink}/>
          <Route path="smartFamily" component={SmartFamily}/>
          <Route path="smartCommunity" component={SmartCommunity}/>
          <Route path="smartProject" component={SmartProject}/>
          <Route path="login" component={LoginBox}/>
          <Route path="register" component={RegisterBox}/>
          <Route path="forgetPass" component={ForgetPass}/>
        </Route>
      </Route>
    </Router>
  )
}

export  default  RouterApp;
