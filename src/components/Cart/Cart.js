import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce( (total, prd) => total + prd.price, 0)
    let shipping = 0;
    if (total > 25 ){
        shipping = 0;
    }
   else if (total > 15) {
        shipping = 0
    } 
    else if (total > 0){
        shipping = 12.99
    }
    const tax = Math.round(total / 10);
    const grandTotal = Math.round(total + shipping + tax);
    return (
        <div>
                <h3>Order Sumarry : </h3>
                <h4>Order Item : {cart.length}</h4>
                <p>Product Price : {Math.round(total)}</p>
                 <p>Shipping cost : {shipping}</p>
                 <p>Tax + Vat : {tax}</p>
                <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;