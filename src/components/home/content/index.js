/**
 * Created by qoder on 16/7/22.
 */
import React, {Component} from 'react';
import HomePage from './homepage';
import './index.css';

class MainContent extends Component {
  render() {
    return (
      <div className="content">
        {this.props.children || <HomePage/>}
      </div>
    )
  }
}

export  default MainContent;
