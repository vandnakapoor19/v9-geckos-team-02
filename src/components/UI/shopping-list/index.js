import React from 'react';

const List = ({ src, name, title, id, ctgClick, pageTitle, detailClick }) => (
    <div
        className="col-md-4 col-lg-3 col-sm-6 my-3 d-flex align-items-stretch"
        onClick={() => pageTitle === "Shop by Category" ? ctgClick(id, title) : detailClick(id, name)}
    >
        <figure className="card card-sm card-product ">
            <div className="card-img text-center mt-4"><img src={src} className="figure-img img-fluid rounded " alt="" /></div>
                {/* <div className="mask rgba-white-slight"></div> */}

                <figcaption className="info-wrap text-center card-body ">
                <h1 className="title text-truncate text-secondary"><strong>{title}</strong></h1>
                    <p className="card-text">{name}</p>
                </figcaption>
         </figure>
            </div>



            )
            
export default List;