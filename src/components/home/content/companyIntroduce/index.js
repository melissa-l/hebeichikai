/**
 * Created by qoder on 16/9/28.
 */
import React, {Component} from 'react';
import company from '../../../../images/gongsi.png'
import aboutUs from '../../../../images/aboutUs.png';
import './index.css';


class CompnayIntroduce extends Component {
  render() {
    return (
      <div className="company-introduce-wrapper">
        <div className="company-introduce-banner"></div>
        <div className="company-introduce-content">
          <div className="sub-introduce">
            <div className="sub-introduce-inner">
              <div className="left-logo"></div>
              <div className="right-introduce">
                <img src={company} alt="河北驰凯科技有限公司"/>
              </div>
            </div>
          </div>
          <div className="sub-introduce">
            <div className="sub-introduce-inner">
              <div className="left-introduce">
                <img src={aboutUs} alt="关于驰凯科技有限公司"/>
              </div>
              <div className="right-logo">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default  CompnayIntroduce;
