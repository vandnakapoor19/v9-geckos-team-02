import React from 'react';
import ProductImage from "../../components/containers/product/productimage";
import ProductDetail from "../../components/containers/product/detail";

import "./product.css";

const Product = () => (
      <section className="container my-4">
        {/* <h4><span className="text-main">Category  Name</span> </h4> */}
        <div className ="row justify-content-center align-items-center">  
          <div className="col-5">
            <ProductImage/>
          </div>
        
          <div className="col-7">
            <ProductDetail/>
          </div>

        </div>
       
        
        Product
      </section>
  );

export default Product;