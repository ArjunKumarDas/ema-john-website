import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, img} = props.product;
    return (
        <div className="review-item ">
            <img src={img} alt="" />
            <h4>{name}</h4> 
            <p>Quantuty : {quantity}</p>
            <br/>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;