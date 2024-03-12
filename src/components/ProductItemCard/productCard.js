import {Link} from 'react-router-dom';
import { FaIndianRupeeSign } from "react-icons/fa6";

import './productCard.css';

const ProductItemCard = (props) => {
    const {productCardDetails} = props;
    const {id, title, description, category, image, price, rating} = productCardDetails;

    return(
        <Link to={`/products/${id}`} className="product-link">
        <div className='product-card-container'>

                <img src={image} alt="product" className='product-card-image' />
            
            <p className='product-card-title'>{title}</p>
            <p className='product-card-description'>{description}</p>
            <div className="product-card-price-container">
                <FaIndianRupeeSign />
                <p className='product-card-price'>{price}</p>
            </div>
            <p className='product-card-rating'>rating - {rating.rate}</p>
        </div>
        </Link>
        
    )

}

export default ProductItemCard;