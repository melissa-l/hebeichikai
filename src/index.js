import 'core-js/fn/object/assign';
import './styles/reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './routers';

// Render the main component into the dom
ReactDOM.render(RouterApp(), document.getElementById('app'));
