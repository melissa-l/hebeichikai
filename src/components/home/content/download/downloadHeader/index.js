/**
 * Created by qoder on 16/7/23.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';

class DownloadHeader extends Component {
  render() {
    const {title}=this.props;
    return (
      <div className="nav_romApp">
        <div className="download_app">
          <p>{title}</p>
          <span className="title">
            <Link to="/home/fullVersion" className="item" activeClassName="active">
              <span >完整版下载</span>
            </Link>
            <Link to="/home/bateVersion" className="item" activeClassName="active">
              <span >体验版下载</span>
            </Link>
          </span>
          <div className="download_logo">

          </div>
        </div>
      </div>
    )
  }
}

export  default  DownloadHeader;
