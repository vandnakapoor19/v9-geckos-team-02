import React, { Component } from "react";

class cartSummary extends Component {
    state = {
        isDetailClick: false,
        isCodeClick: false,
        msg: ""
    };

    codeClick = () => {
        this.setState({
            isCodeClick: !this.state.isCodeClick
        });
        !this.state.isCodeClick && this.setState({ msg: "" })
    };

    codeSubmit = e => {
        e.preventDefault();
        this.setState({
            msg: "Sorry, this code is not applicable."
        });
    }

    calcQuality = i => i.reduce((acc, cur) => acc + cur.quality, 0)


    render() {
        const { items } = this.props;
        const { isCodeClick, msg } = this.state;
        return (
            <div className="panel panel-default border shadow rounded mx-auto mt-5">
                <div className="card-body mx-2">

                    <div className="row row justify-content-between">
                        <div className="col-xs-9 col-md-9 my-1">
                            Subtotal ({this.calcQuality(items)} items)
                        </div>
                        ${items.reduce((acc, cur) => (acc + (cur.quality * cur.price)), 0)}

                    </div>

                    <div className="row row justify-content-between">
                        <div className="col-xs-3 col-md-3 my-1">
                            Est.taxes
                        </div>
                        ${(items.reduce((acc, cur) => (acc + (cur.quality * cur.price)), 0) * 0.12).toFixed(2)}
                    </div>

                    <div>
                        <hr />
                        <div className="row row justify-content-between font-weight-bold">
                            <div className="col-xs-3 col-md-3 my-1">
                                Est.total
                        </div>
                            ${(items.reduce((acc, cur) => (acc + (cur.quality * cur.price)), 0) * 1.12).toFixed(2)}
                        </div>
                    </div>

                    <div>
                        <div className="row row justify-content-between">
                            <div className="my-1 ml-3" onClick={this.codeClick}>
                                {isCodeClick
                                    ? (<span>
                                        <u className="mr-2">Hide Code Promo</u> -
                                        </span>)
                                    : (<span>
                                        <u className="mr-2">Apply Code Promo</u> +
                                    </span>)
                                }

                            </div>
                            {isCodeClick && (
                                <div className="my-1 ml-3">
                                    <strong className="text-secondary">Promo code</strong>
                                    <form className="row p-1" onSubmit={this.codeSubmit}>
                                        <input
                                            className="col-7 mx-auto form-control" />

                                        <button
                                            type="submit"
                                            className="btn btn-outline-secondary col-3 responsive-width"
                                        >
                                            Apply
                                            </button>
                                    </form>
                                    <span className="text-danger">{msg}</span>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default cartSummary;