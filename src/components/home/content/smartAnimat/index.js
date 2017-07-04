/**
 * Created by neuqer on 16-10-25.
 */
import React from 'react';
import './index.css';
import App from '../../../../images/bannerBottom/smartFamily/APP.png';

class SmartAnimate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHover: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const scrollTop = document.body.scrollTop;
    if (scrollTop > 150) {
      this.setState({isHover: true})
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const {
      management,
      managebottom,
      manageleft,
      manageright,
      manageTopLeft,
      manageTopCenter,
      manageTopRight
    }=this.props.img;
    const path = window.location.pathname;
    return (
      <div className={this.state.isHover && 'smart-animat'}>
        <div className="animat-app-active">
          <div className="animat-app-active-inner guard"><img src={manageTopLeft}
                                                              style={{marginLeft: path.match(/\/home\/smartProject/) ? "90px" : "60px"}}/>
          </div>
          <div className="animat-app-active-inner brake"><img src={manageTopCenter}/></div>
          <div className="animat-app-active-inner lock"><img src={manageTopRight}
                                                             style={{marginRight: path.match(/\/home\/smartProject/) ? "50px" : "70px"}}/>
          </div>
        </div>
        <div style={{width: 1200, margin: "0 auto"}}>
          <div className="animat-app">
            <i className="app-top-line"><i className="app-top-line-arrow"/></i>
            <i className="app-left-line"/>
            <i className="app-left-top-line"><i className="app-left-top-line-arrow"/></i>
            <i className="app-right-line"/>
            <i className="app-right-top-line"><i className="app-right-top-line-arrow"/></i>
            <i className="app-bottom-line">
              <i className="app-bottom-top-line-arrow"/>
              <i className="app-bottom-line-arrow"/>
            </i>
            <img src={App} alt="App" ref="App"/>
          </div>
        </div>
        <div className="management">
          <div className="management-inner light"><img src={manageleft} alt=""/></div>
          <div className="management-inner property-management">
            <i className="management-bottom-line"><i className="management-bottom-line-arrow"/></i>
            <i className="management-top-line"><i className="management-top-line-arrow"/></i>
            <i className="management-left-line"><i className="management-left-line-arrow"/> </i>
            <i className="management-right-line"><i className="management-right-line-arrow"/> </i>
            <img src={management} alt="物业管理"/>
          </div>
          <div className="management-inner people"><img src={manageright} alt=""/></div>
          <div className="inner"></div>
          <div className="safe"><img src={managebottom}
                                     style={{marginLeft: path.match(/\/home\/smartProject/) ? "365px" : "265px"}}/>
          </div>
        </div>
      </div>
    )
  }

}

export default SmartAnimate;
