require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TopBar from './home/topBar';
import NavigationBar from  './home/navigationBar';
import MainContent from './home/content';
import BackToTop from './home/plugins/backToTop';
import Footer from './home/footer';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <TopBar/>
        <NavigationBar/>
        {this.props.children||<MainContent/>}
        <BackToTop/>
        <Footer/>
      </div>
    );
  }
}

export default AppComponent;
