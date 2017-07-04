/**
 * Created by stonehx on 16-9-24.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';


class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-content">
          <ul>
            <li>
              <Link
                className={window.location.pathname.match(/^\/home\/smartLock\/lightLock/)?'active':''}
                to="/home/smartLock/lightLock/k80" activeClassName="active">
                <i className="lock-icon smartLock-icon"/>
                <span>光控智能锁</span>
              </Link>
            </li>
            <li>
              <Link to="/home/smartLock/blueTooth" activeClassName="active">
                <i className="lock-icon blueToothLock-icon"/>
                <span>蓝牙锁</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}


export default NavBar;
