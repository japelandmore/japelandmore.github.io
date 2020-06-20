import React from 'react'
import DecisionCss from './Decision.module.css'
import DecisionPageController from '../../../framework/controllers/DecisionPageController'

const DecisionPage = () => {

    const [decision] = React.useState(DecisionPageController.getUserDecision());
    
    return(

        <div className={DecisionCss.decision}>

            <div className={DecisionCss.container}>

                {decision}

            </div>

        </div>

    )
}


export default DecisionPage;