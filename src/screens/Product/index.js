import React from 'react';
import ProductImage from "../../components/containers/product/productimage";
import ProductDetail from "../../components/containers/product/detail";
import Similars from "../../components/containers/product/similars";

import "./product.css";

const Product = () => (
      <section className="container my-4">
        {/* <h4><span className="text-main">Category  Name</span> </h4> */}
        <div className ="row justify-content-center align-items-center mx-4">  
          <div className="col-5">
            <ProductImage/>
          </div>
        
          <div className="col-6">
            <ProductDetail/>
          </div>

          <div className ="row justify-content-center align-items-center mx-4">
            <Similars />
          </div>
        </div>
       
      </section>
  );

export default Product;