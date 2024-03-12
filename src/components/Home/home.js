import {Component} from 'react';
import {v4 as uuidv4} from 'uuid'

import Navbar from '../Navbar/navbar.js';
import ProductItemCard from '../ProductItemCard/productCard.js';

import './home.css';

class Home extends Component {
  state = {productsList: [], isLoading: true}

  getProducts = async() => {
    const options = {
      method: 'GET'
    }
   
    const response = await fetch('https://fakestoreapi.com/products', options);
    const data = await response.json();
    this.setState({productsList: data, isLoading: false})
  }

  getCategoryBasedProducts = async(category) => {
    this.setState({isLoading: true});

    let url = `https://fakestoreapi.com/products/category/${category}/`;

    if (category == 'all'){
      url = 'https://fakestoreapi.com/products/';
    } 

    const options = {
      method: 'GET'
    }
    
    const response = await fetch(url, options);
    const data = await response.json();

    this.setState({productsList: data, isLoading: false});
  }

  componentDidMount(){
    this.getProducts()
  }

  render(){
    const {productsList, isLoading} = this.state

    return (
      <div className="products-bg-container">
        <Navbar getCategoryBasedProducts={this.getCategoryBasedProducts}/>
        {isLoading && (<div class="spinner-border text-primary products-spinner" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>)}
        <ul className="products-list-container">
          {productsList.map(eachProduct => <ProductItemCard key={uuidv4()} productCardDetails={eachProduct}/>)}
        </ul>
      </div>
    );
  }
}

export default Home;
