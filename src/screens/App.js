import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';

import Footer from '../components/UI/Footer';
import Header from '../components/UI/Header';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact path='/product/:id' component={Product} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
