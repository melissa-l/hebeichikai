/**
 *
 * Created by qoder on 16/9/29.
 */
import React from 'react';
import {Link} from 'react-router';
import './index.css';

const VersionBanner = ()=> {
  return (
    <div className="versionBanner-wrapper">
      <ul className="versionBanner">
        <li><Link to='/home/smartLock/lightLock/k80' className="has-left" activeClassName="active">k80</Link></li>
        <li><Link to='/home/smartLock/lightLock/k70' activeClassName="active">k70</Link></li>
      </ul>
    </div>
  )
};


export default  VersionBanner;
