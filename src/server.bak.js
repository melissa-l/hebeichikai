/**
 * Created by qoder on 16-10-18.
 */
import React from 'react'
import {renderToString} from 'react-dom/server'
import {RouterContext, match} from 'react-router'
import RouterApp from './routers';


export default function render(req, res) {
  match({routes: RouterApp(), location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const InitialView = (
        <RouterContext {...renderProps} />
      );
      const componentHTML = renderToString(InitialView);
      if (__DEVSERVER__) {
        res.set('Content-Type', 'text/html');
        res.render('index', {html: componentHTML});
      } else {
        res.set('Content-Type', 'text/html');
        res.render('index', {html: componentHTML});
      }
    } else {
      res.status(404).send('Not Found')
    }
  })
}
