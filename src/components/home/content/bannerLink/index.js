import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import bannerLink1 from '../../../../images/banner/banner1-link.jpg';
import bannerLink2 from '../../../../images/banner/banner2-link.jpg';
import bannerLink3 from '../../../../images/banner/banner3-link.jpg';
import './index.css';

class BannerLink extends Component {
  render() {
    const {routeParams} =this.props;
    const linkimgs = [bannerLink1, bannerLink2, bannerLink3];
    return (
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionName="fade">
        <div className="bannerLinkWrapper">
          <img src={linkimgs[routeParams.linkNum - 1] || bannerLink1} alt="河北驰凯科技有限公司"/>
        </div>
      </ReactCSSTransitionGroup>)
  }
}

export default BannerLink;
