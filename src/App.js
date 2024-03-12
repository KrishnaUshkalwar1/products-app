import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/home.js'
import ProductDetails from './components/ProductDetails/productDetails.js';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products/:id" component={ProductDetails} />
    </Switch>
  </BrowserRouter>
)


export default App;