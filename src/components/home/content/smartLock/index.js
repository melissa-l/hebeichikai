/**
 * Created by stonehx on 16-9-24.
 */
import React, {Component} from 'react';
import NavBar from './navbar';
import './index.css';

class SmartLock extends Component {
  render() {
    return (
      <div className="smart-lock">
        <NavBar/>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}


export default SmartLock;
