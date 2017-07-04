/**
 * Created by stonehx on 16-9-24.
 */
import React, {Component} from 'react';
import VersionBanner from './versionBanner';
import Lock from '../../lockIntroduce';

class LightLock extends Component {
  render() {
    return (
      <div>
        <VersionBanner/>
        {this.props.children||<Lock/>}
      </div>
    )
  }
}

export default LightLock;
