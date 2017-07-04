import React, {Component} from 'react';
import Banner from '../../../../images/bannerBottom/smartFamily/smartFamilyTop.png';
import './index.css';


class SmartFamily extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
    this.handleScroll=this.handleScroll.bind(this);
  }

  handleScroll(){
    const scrollTop=document.body.scrollTop;
    if(scrollTop>150){
      this.setState({isHover:true})
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className="smartFamily-wrapper">
        <div className="banner">
          <img src={Banner}/>
        </div>
        <div className="smartFamily-content">
          <div className="inner">
            <div className={this.state.isHover&&'appActive'}>
              <div className="app" ref="App"/>
              <div className="lighting"/>
              <div className="airTv airTv-1"/>
              <div className="curtain"/>
              <div className="bottom-line-wrapper bottom-line-wrapper-1">
                <i className="bottom-line bottom-line-1"/>
                <i className="bottom-line-arrow"/>
              </div>
              <div className="left-line-wrapper">
                <i className="left-line left-line-1"/>
              </div>
              <div className="right-line-wrapper">
                <i className="right-line right-line-1"/>
              </div>
              <div className="left-bottom-line-wrapper line-common-2">
                <i className="left-bottom-line top-bottom-line top-bottom-line-1"/>
                <i className="top-bottom-line-arrow left-bottom-arrow"/>
              </div>
              <div className="right-bottom-line-wrapper line-common-2">
                <i className="right-bottom-line top-bottom-line top-bottom-line-1"/>
                <i className="top-bottom-line-arrow right-bottom-arrow"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SmartFamily;
