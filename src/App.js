import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './history';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import BeerCategory from './pages/BeerCategory';
import Login from './pages/Login';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import BrejasContext from './BrejasContext';
import { useState } from 'react';

function App() {
  const [loggedUser, setLoggedUser] = useState(false);
  const [itemsOnCart, setItemsOnCart] = useState(0);

  const contextElems = {
    loggedUser,
    itemsOnCart,
    setLoggedUser,
    setItemsOnCart,
  }

  return (
    <BrejasContext.Provider value={contextElems}>
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cervejas" component={BeerCategory} />
          <Route path="/cerveja-generica" component={Product} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    </BrejasContext.Provider>
  );
}

export default App;