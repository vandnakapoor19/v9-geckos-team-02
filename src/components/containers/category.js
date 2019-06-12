import React, { Component } from 'react';
import List from '../UI/shopping-list';

import { connect } from 'react-redux';

import { withRouter} from 'react-router-dom';
import { searchByCtg } from '../../actions/searchByCategory';

class Category extends Component {
    state = {
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
                categoryId: 20081,
                categoryName: "Antiques",
                img: "https://res.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_300,q_auto:best,w_400/v4/wysiwyg/New_Category_Page_Refresh/Furniture/1600x1200_FURNITURE_Template_0000s_0003_Bendt.jpg"
            },
            {
                categoryId: 20081,
                categoryName: "Antiques",
                img: "https://res.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_300,q_auto:best,w_400/v4/wysiwyg/New_Category_Page_Refresh/Furniture/1600x1200_FURNITURE_Template_0000s_0003_Bendt.jpg"
            },
            {
                categoryId: 20081,
                categoryName: "Antiques",
                img: "https://res.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_300,q_auto:best,w_400/v4/wysiwyg/New_Category_Page_Refresh/Furniture/1600x1200_FURNITURE_Template_0000s_0003_Bendt.jpg"
            },
            {
                categoryId: 20081,
                categoryName: "Antiques",
                img: "https://res.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_300,q_auto:best,w_400/v4/wysiwyg/New_Category_Page_Refresh/Furniture/1600x1200_FURNITURE_Template_0000s_0003_Bendt.jpg"
            },
            {
                categoryId: 20081,
                categoryName: "Antiques",
                img: "https://res.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_300,q_auto:best,w_400/v4/wysiwyg/New_Category_Page_Refresh/Furniture/1600x1200_FURNITURE_Template_0000s_0003_Bendt.jpg"
            },
            {
                categoryId: 20081,
                categoryName: "Antiques",
                img: "https://res.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_300,q_auto:best,w_400/v4/wysiwyg/New_Category_Page_Refresh/Furniture/1600x1200_FURNITURE_Template_0000s_0003_Bendt.jpg"
            },
            {
                categoryId: 20081,
                categoryName: "Antiques",
                img: "https://res.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_300,q_auto:best,w_400/v4/wysiwyg/New_Category_Page_Refresh/Furniture/1600x1200_FURNITURE_Template_0000s_0003_Bendt.jpg"
            },
            {
                categoryId: 20081,
                categoryName: "Antiques",
                img: "https://res.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_300,q_auto:best,w_400/v4/wysiwyg/New_Category_Page_Refresh/Furniture/1600x1200_FURNITURE_Template_0000s_0003_Bendt.jpg"
            },
            {
                categoryId: 20081,
                categoryName: "Antiques",
                img: "https://res.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_300,q_auto:best,w_400/v4/wysiwyg/New_Category_Page_Refresh/Furniture/1600x1200_FURNITURE_Template_0000s_0003_Bendt.jpg"
            },
            {
                categoryId: 20081,
                categoryName: "Antiques",
                img: "https://res.cloudinary.com/made-com/image/upload/a_auto,b_transparent,c_pad,d_made.svg,dpr_1.0,f_auto,h_300,q_auto:best,w_400/v4/wysiwyg/New_Category_Page_Refresh/Furniture/1600x1200_FURNITURE_Template_0000s_0003_Bendt.jpg"
            }
        ]
    }

    ctgClick = (id, name) => {
        // console.log('id:',id);
        this.props.dispatch(searchByCtg(id));
        this.props.history.push({
            pathname: `category/${name}`
        })
    }

    render() {
        const { categories } = this.state;
        // console.log('ctg:',categories);
        return (
            <div className="row">

                <div className="container text-center my-4">
                    <h1>Shop by Category</h1>
                </div>
                {
                    categories.map((ctg, index) => (
                        <List
                            key={index}
                            src={ctg.img}
                            name={ctg.categoryName}
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