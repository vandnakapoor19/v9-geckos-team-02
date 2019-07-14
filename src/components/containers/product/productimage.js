import React from 'react';
import ReactImageMagnify from "react-image-magnify";
import { connect } from 'react-redux';

// import watchImg from '../../img/showcase.jpg';

const ProductImage = props => {

    return (
        <div className="fluid">
        <h4><span className="text-main">{props.title}</span> </h4>
            <div className="fluid__image-container">
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: props.title,
                        src: props.watchImg,
                        width: 200,
                        height: 200
                    },
                    largeImage: {
                        src: props.watchImg,
                        width: 550,
                        height: 450
                    },
                    isHintEnabled: true
                }} />
            </div>

        </div>
    )
}


const mapStateToProps = state => {
    return {
        watchImg: state.items.itemDetail[0].galleryURL,
        titile: state.items.itemDetail[0].title
    }
}

export default connect(mapStateToProps)(ProductImage)
