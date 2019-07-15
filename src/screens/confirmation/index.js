import React from 'react';
import ConfirmFlow from '../../components/containers/flow/confirmFlow';
import CurrentOrderSummary from '../../components/containers/CurrentOrderSummary';
import ConfirmInfo from '../../components/containers/confirmation/info';

const Confirmation = () => (
    <div className="container">

        <div className="container m-5">
            <ConfirmFlow />
            <br />
        </div>


        <div className="row justify-content-between">
            <br />
            <div className="col-md-7 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">               
                <ConfirmInfo />
            </div>

            <div className='col-md-4 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6'>
                <div className="panel-body"><CurrentOrderSummary /></div>
            </div>

        </div>
    </div>
)

export default Confirmation;