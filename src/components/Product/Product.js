import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h4><Link to={"/product/"+key}>{name}></Link></h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in  - order soon</small></p>
              { props.showAddToCart && <button className="main-button"
                onClick={() => props.handleAddProduct(props.product)}
                >add to cart</button>}
            </div>
        </div>
    );
};

export default Product;