import React from 'react'
import DecisionCss from './Decision.module.css'
import DecisionPageController from '../../../framework/controllers/DecisionPageController'
import {withRouter} from 'react-router-dom'

const DecisionPage = (props) => {

    const userDecision = props.location.state && props.location.state.tableDecision
    
    const [decision] = React.useState( DecisionPageController.getUserDecision(userDecision));

    return(

        <div className={DecisionCss.decision}>

            <div className={DecisionCss.container}>

                {decision}

            </div>

        </div>
        
    )
}


export default withRouter(DecisionPage);