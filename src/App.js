import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './history';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import BeerCategory from './pages/BeerCategory';
import Login from './pages/Login';
import Product from './pages/Product';
import Checkout from './pages/Checkout';


function App() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cervejas" component={BeerCategory} />
        <Route path="/cerveja-generica" component={Product} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;