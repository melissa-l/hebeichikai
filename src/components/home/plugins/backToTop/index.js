/**
 * Created by pororo on 16-10-22.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class BackToTop extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    if (window.scrollY > 300) {
      ReactDOM.findDOMNode(this.refs.button).style.display = "block";
    } else {
      ReactDOM.findDOMNode(this.refs.button).style.display = "none";
    }
  }

  handleClick() {
    scrollTo(0, 0);
  }

  render() {
    return (
      <a className="backtotop"
         ref="button"
         title="返回顶部"
         onScroll={this.handleScroll}
         onClick={this.handleClick}
      > </a>

    )
  }
}

export default BackToTop;
