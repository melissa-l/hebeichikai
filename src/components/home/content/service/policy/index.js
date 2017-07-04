/**
 * Created by qoder on 16/7/22.
 */
import React, {Component} from 'react';
import ExchangeTable from './exchangeTable';
import Annotation from './annotation';
import InstallService from './installService';
import './index.css';

class Policy extends Component {
  render() {
    return (
      <div className="policy-container">
        <h1 className="big-title">驰凯科技智能锁售后服务</h1>
        <div className="problem common-problem">
          <div className="title">
            <h3 className="install-service-title">安装服务</h3>
          </div>
          <div className="problem-main">
            <InstallService/>
          </div>
          <div className="title">
            <h3>退换政策</h3>
          </div>
          <div className="problem-main">
            <ExchangeTable/>
            <Annotation/>
          </div>
        </div>
      </div>
    )
  }
}

export  default Policy;
