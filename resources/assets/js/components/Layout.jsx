import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header.jsx';
import Home from './Home.jsx';
import Products from './Products.jsx';
import Pricing from './Pricing.jsx';

class Layout extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={Products}/>
        <Route path="/pricing" component={Pricing}/>
      </div>
    );
  }
}

export default Layout;
