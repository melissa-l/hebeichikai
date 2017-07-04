/**
 * Created by qoder on 16-7-23.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import './index.css';

const sBanner1 = require('../../../../../images/smallBanner/smartFamily.jpg');
const sBanner2 = require('../../../../../images/smallBanner/smartClub.jpg');
const sBanner3 = require('../../../../../images/smallBanner/smartProject.png');
class BottomTab extends Component {
  render() {
    return (
      <div className="bottom_tab clearfix">
        <ul className="tablist clearfix">
          <li>
            <div className="item">
              <Link to="/home/smartFamily">
                <img src={sBanner1} alt="图片"/>
              </Link>
              <span className="bottom-caption">智慧家庭</span>
            </div>
          </li>
          <li>
            <div className="item">
              <Link to="/home/smartCommunity">
              <img src={sBanner2} alt="图片"/>
              </Link>
              <span className="bottom-caption">智慧社区</span>
            </div>
          </li>
          <li>
            <div className="item">
              <Link to="/home/smartProject">
                <img src={sBanner3} alt="图片"/>
              </Link>
              <span className="bottom-caption">智慧工程</span>
            </div>
          </li>

        </ul>
      </div>
    )
  }
}

export  default  BottomTab;
