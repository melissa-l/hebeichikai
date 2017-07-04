/**
 * Created by qoder on 16/7/23.
 */
import React, {Component} from 'react';
import './index.css';


class IntroductionBook extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-panel">
          <div className="title">
            <span>说明书下载</span>
          </div>
          <div className="app-link">
            <ul className="book">
              <li className="book-item"></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export  default IntroductionBook;
