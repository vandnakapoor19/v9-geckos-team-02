import React, { Component } from 'react';
import List from '../UI/shopping-list';

import { connect } from 'react-redux';

import { withRouter} from 'react-router-dom';
import { searchByCtg } from '../../actions/searchByCategory';

class Category extends Component {
    state = {
        pageTitle: "Shop by Category",
        categories: [
            {
                categoryId: 20081,
                categoryName: "Antiques",
                img: "https://res.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_300,q_auto:best,w_400/v4/wysiwyg/New_Category_Page_Refresh/Furniture/1600x1200_FURNITURE_Template_0000s_0003_Bendt.jpg"
            },
            {
                categoryId: 550,
                categoryName: "Art",
                img: "https://i0.wp.com/www.perrymilou.com/wp-content/uploads/2019/03/C535D19D-3E1E-4D50-9726-E74CAAC8181D.jpg?resize=400%2C300&ssl=1"
            },
            {
                categoryId: 2984,
                categoryName: "Baby",
                img: "https://www.childrenscolorado.org/globalassets/parenting-advice/articles/safe-sleep-baby.jpg?width=400&height=300"
            },
            {
                categoryId: 267,
                categoryName: "Books, Comics & Magazines",
                img: "https://savacoolandsons.blob.core.windows.net/photos/30339/30339-v6l4-m.jpeg"
            },
            {
                categoryId: 625,
                categoryName: "Cameras & Photography",
                img: "https://www.cameralabs.com/wp-content/uploads/gk_nsp_cache/hero_NikonZ24-70f2-8S_55136-gk_nsp-3_article.jpg"
            },
            {
                categoryId: 9800,
                categoryName: "Cars, Motorcycles & Vehicles",
                img: "https://www.picclickimg.com/d/l400/pict/303181812313_/Fiat-500F-Round-Speedo.jpg"
            },
            {
                categoryId: 11450,
                categoryName: "Clothes, Shoes & Accessories",
                img: "https://www.nextdirect.com/nxtcms/resource/image/814562/landscape_ratio4x3/400/300/72cb8176ac8618b2ac1274c07d17a7/QK/dt-newin.jpg"
            },
            {
                categoryId: 58058,
                categoryName: "Computers,Tablets & Networking",
                img: "http://www.theowl.com.au/source/ckfinder/files/New%20Computers.jpg"
            },
            {
                categoryId: 11232,
                categoryName: "DVDs, Films & TV",
                img: "https://www.umhs-sk.org/blog/wp-content/uploads/2013/12/movie-popcorn.jpg"
            },
            {
                categoryId: 281,
                categoryName: "Jewellery & Watches",
                img: "https://stockport-bullion.co.uk/wp-content/uploads/2018/04/Jewellery-400x300.jpg"
            },
            {
                categoryId: 1281,
                categoryName: "Pet Supplies",
                img: "https://i.pinimg.com/originals/17/28/22/1728228e918dc9bf5d8c4c92f7d58db9.jpg"
            },
            {
                categoryId: 1249,
                categoryName: "Video Games & Consoles",
                img: "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/gameconsoles/Microsoft_Xbox_One_X/Microsoft_Xbox_One_X_L_1.jpg"
            },
        ]
    }

    ctgClick = (id, title) => {
        this.props.dispatch(searchByCtg(id));
        this.props.history.push({
            pathname: `${title}/pageNumber=1`
        })
    }

    render() {
        const { categories, pageTitle } = this.state;
        return (
            <div className="row">

                <div className="container text-center my-4">
                    <h1>{pageTitle}</h1>
                </div>
                {
                    categories.map((ctg, index) => (
                        <List
                            pageTitle={pageTitle}
                            key={index}
                            src={ctg.img}
                            title={ctg.categoryName}
                            id={ctg.categoryId}
                            ctgClick={this.ctgClick}
                        />
                    ))
                }
            </div >
        )
    }
}


export default withRouter(connect()(Category));