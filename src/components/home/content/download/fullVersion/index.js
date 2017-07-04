/**
 * Created by qoder on 16/7/23.
 */
import React, {Component} from 'react';
import DownloadHeader from  '../downloadHeader';
import DownloadApp from '../App';
import IntroductionBook from '../instructionBook';
import './index.css';


class FullVersion extends Component {
  render() {
    return (
      <div className="full_version">
        <DownloadHeader title="完整版客户端和说明书下载"/>
        <DownloadApp title="完整版客户端"/>
        <IntroductionBook/>
      </div>
    )
  }
}

export  default  FullVersion;
