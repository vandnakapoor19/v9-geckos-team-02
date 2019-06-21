import React, { Component } from 'react';
import ReactImageMagnify from "react-image-magnify"
import watchImg from '../../img/showcase.jpg';

export default class productimage extends Component {
    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            src: watchImg,
                            width: 550,
                            height: 450
                        },
                        largeImage: {
                            src: watchImg,
                            width: 1200,
                            height: 1800
                        },
                        isHintEnabled: true
                    }} />
                </div>
           
            </div>
        )
    }
}
