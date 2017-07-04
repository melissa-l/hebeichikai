/**
 * Created by qoder on 16/10/18.
 */
import {hashHistory, Router, Route} from 'react-router';
import Test from './test';
import Test2 from './test2';

export default ()=>(
  <Router path="/" component={Test} history={hashHistory}>
    <Route path="test" component={Test}/>
    <Route path="test2" component={Test2}/>
  </Router>
)
