/**
 * Created by qoder on 16/7/23.
 */
import React,{Component} from 'react';
import './index.css';

class  DownloadApp extends  Component{
  render(){
    const {title}=this.props;
    return (
      <div className="app-container">
        <div className="app-panel">
          <div className="title">
            <span>{title}</span>
          </div>
          <div className="app-link">
            <ul className="client">
              <li className="client-item client-item-1"></li>
              <li className="client-item client-item-2"></li>
              <li className="client-item client-item-3"></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


export  default DownloadApp;
