
import React from 'react';
import fakeData from '../../fakeData'; 
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
// import Cart from '../Cart/Cart';
const Shop = () => {
  const frist10 = fakeData.slice(0,10);
  const [products, setProducts] = useState(frist10);
  const [cart, setCart] = useState([]);


  const handleAddProduct = (product) =>{
      // console.log('adddddddddd', product);
    const newCart = [...cart, product];
    setCart(newCart);
  }

    return (
        <div className="shop-conatiner">
            <div className="product-container">
              {
               products.map(pd => <Product 
                handleAddProduct = {handleAddProduct}
                product={pd}
                ></Product>)            
              } 
           </div>
             <div className="cart-container">
             <Cart cart={cart}></Cart>
             </div>
           
        </div>
    );
};

export default Shop;
























// import React from 'react';
// import fakeData from '../../fakeData';
// const Shop = () => {
//     const frist10 = fakeData.slice(0, 10);
//     const [products, setProducts]= useState(frist10);
    


//     return(
//         <div>
//             <h1>This is shop</h1>
//            <h3>{products.length}</h3>
//            <ul>
//                {
//                    products.map(product => <li>{product.price}</li>)
//                }
//            </ul>
//         </div>
//     );
// };

// export default Shop;