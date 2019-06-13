import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import SearchByCategoty from './SearchByCategoty';
import SearchByKeywords from './SearchByKeywords';

import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';
import About from './About';
import Contact from './Contact';

import Footer from '../components/UI/Footer';
import Header from '../components/UI/Header';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/category/:categoryName' component={SearchByCategoty} />
          <Route exact path='/:keywords' component={SearchByKeywords} />
          <Route exact path='/product/:id' component={Product} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
