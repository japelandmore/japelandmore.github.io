import React from 'react';
import StatusCss from './Status.module.css';
import {withRouter} from 'react-router-dom';
import StatusController from '../../../framework/controllers/StatusController'

const Status = ({status,section,additional_msg,...props}) => {

    let s = status;

    console.log(s);

    const pageDecision = props.location.state && props.location.state.pageDecision;                
    const tableDecision = props.location.state && props.location.state.tableDecision;                
    const pageAction = props.location.state && props.location.state.pageAction;                

    const [header] = React.useState(StatusController.getHeader(status,section,pageDecision,pageAction,tableDecision,additional_msg));
    const [mainOption] = React.useState(StatusController.getMainOption(status,section,pageDecision,pageAction,tableDecision));
    const [otherOption] = React.useState(StatusController.getOtherOption(section,pageDecision,pageAction,tableDecision));

    return(

        <div className={StatusCss.modal_background}>
            
            <div className={StatusCss.modal}>

                <div className={StatusCss.container}>

                    {header}

                    <div className={StatusCss.body}>
                        
                        {mainOption}

                        {otherOption}
                        
                    </div>

                </div>

            </div>

        </div>
    )
}

export default withRouter(Status);