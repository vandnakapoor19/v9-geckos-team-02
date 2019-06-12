import React from 'react';

const List = ({src, name, id, ctgClick}) => (
        <div 
            className="col-md-4 col-lg-3 col-sm-6 my-3"
            onClick={() => ctgClick(id, name)}
            >
            <figure className="card card-sm card-product">
                {/* <span className="badge-new"> NEW </span> */}
                <img src={src} class="figure-img img-fluid rounded" alt="" />
                {/* <div className="img-wrap"> 
                <img src="images/items/3.jpg" logo=""> 
                </div> */}
                <figcaption className="info-wrap text-center">
                    <h6 className="title text-truncate">{name}</h6>
                </figcaption>
            </figure>
        </div>

        // <div className="col-md-3">
        //     <figure className="card card-sm card-product">
        //         <span className="badge-offer"><b> - 50%</b></span>
        //         <img src="..." class="figure-img img-fluid rounded" alt="" />
        //         {/* <div className="img-wrap"> <img src="images/items/4.jpg"> </div> */}
        //         <figcaption className="info-wrap text-center">
        //             <h6 className="title text-truncate"><a href="#">The name of product</a></h6>
        //         </figcaption>
        //     </figure>
        // </div>

    //     <div class="col-md-3">
    //         <figure className="card card-sm card-product">
    //             <img src="..." class="figure-img img-fluid rounded" alt="" />
    //             {/* <div className="img-wrap"> <img src="images/items/5.jpg">	</div> */}
    //             <figcaption className="info-wrap text-center">
    //                 <h6 className="title text-truncate"><a href="#">Name of product</a></h6>
    //             </figcaption>
    //         </figure>
    //     </div>

    //     <div class="col-md-3">
    //         <figure className="card card-sm card-product">
    //             <img src="..." class="figure-img img-fluid rounded" alt="" />
    //             {/* <div className="img-wrap"> <img src="images/items/6.jpg">	</div> */}
    //             <figcaption className="info-wrap text-center">
    //                 <h6 className="title text-truncate"><a href="#">The name of this product goes here</a></h6>
    //             </figcaption>
    //         </figure>
    //     </div>
    // </div>
)

export default List;