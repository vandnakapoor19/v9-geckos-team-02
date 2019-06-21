import React from 'react';
import ProductImage from "../../components/containers/product/productimage";
import ProductDetail from "../../components/containers/product/detail";
import Cartdetails from "../../components/containers/product/cartdetail";

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