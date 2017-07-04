/**
 * Created by qoder on 16/9/29.
 */
import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const k70 = require('../../../../images/lockIntroduce/CK70.jpg');
const k80 = require('../../../../images/lockIntroduce/CK80.jpg');
const blueTooth = require('../../../../images/lockIntroduce/blueTooth.jpg');

class LockIntroduce extends Component {
  render() {
    const version = this.props.routeParams.version;
    const imageGroup = {
      k70,
      k80,
      blueTooth
    };
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionName="fade">
      <div style={{marginTop: '-20px',width:'100%'}}>
        <img src={imageGroup[version] || k70} alt="锁介绍" style={{width: '100%'}}/>
      </div>
      </ReactCSSTransitionGroup>
    )
  }
}
export default LockIntroduce;
