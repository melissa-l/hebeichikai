/**
 * Created by qoder on 16/7/22.
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';


class Product extends Component {
  render() {
    return (
      <div>
        <div className="submenu">
          <ul>
            <li><Link to="/home/product/introduce" activeStyle={{color: '#00a9e9'}}>产品介绍</Link></li>
            <li><Link to="/home/product/specification" activeStyle={{color: '#00a9e9'}}>规格参数</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export  default Product;
