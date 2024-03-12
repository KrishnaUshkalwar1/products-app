import { Component } from 'react';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import './productDetails.css';

class ProductDetails extends Component {
    state = {Product: {}, isLoading: true}

    componentDidMount(){
        this.getProductAllDetails()
    }
    
    getProductAllDetails = async() => {
        const {match} = this.props;
        const {params} = match;
        const {id} = params;
        
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        
        this.setState({Product: data, isLoading: false});
    }

    render(){
        const {Product, isLoading} = this.state;

        return(
            <div className='product-details-bg-container'>
                {isLoading && (<div class="spinner-border text-success product-spinner" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>)}

                {!isLoading && (
                 <div className='product-details-container'>
                    <img src={Product.image} alt="product" className='product-image' />
                    <div className='product-details-information-container'>
                        <h1 className='product-details-information-title'>{Product.title}</h1>
                        <p className='product-details-information-description'>{Product.description}</p>
                        <p className='product-details-information-category'>Category - {Product.category}</p>
                        <div className='product-details-information-price-container'>
                            <FaIndianRupeeSign className='rupee-icon'/>
                            <p className='product-details-information-price'>{Product.price}</p>
                        </div>
                        
                        <div className="rate-container">
                            <FaStar className='star' />
                            <p className='rate'>{Product.rating.rate}</p>
                        </div>
                        <p className='count'>{Product.rating.count}</p>
                        
                    </div>
                 </div>)}
            </div>
        )
    }
}

export default ProductDetails;