import React from 'react';
import ProductImage from "./productimage";
import ProductDetail from "./productdetail";
import Cartdetails from "./cartdetail";

const Product = () => (
      <section className="container">
        <h4><span className="text-main">Category  Name</span> </h4>
        <div className ="product-container">  
          <div className="product-details-image">
            <ProductImage/>
          </div>
        
          <div className="product-details">
            <ProductDetail/>
          </div>
          
          <div className="product-details">
            <Cartdetails/>
          </div>
        </div>
       
        
        Product
      </section>
  );

export default Product;