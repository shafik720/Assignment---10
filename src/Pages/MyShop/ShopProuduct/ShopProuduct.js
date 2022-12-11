import React, { useEffect } from 'react';
import './ShopProuduct.css';

const ShopProuduct = (props) => {    
    const{img, catagory, price} = props.index;
    return (
        <div className='product-img-parent'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-first-div">
                <button onClick={()=>props.addProduct(img)}>Add to Cart</button>
            </div>
            <div className="product-second-div">
                <button>Add to Wishlist</button>
            </div>
            <div className="price">
                <p>$ {price} </p>
            </div>            
        </div>
    );
};

export default ShopProuduct;