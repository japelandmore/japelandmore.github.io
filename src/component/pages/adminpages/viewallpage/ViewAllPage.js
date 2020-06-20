import React from 'react'
import ViewAllCss from './ViewAllPage.module.css'
import ViewAllPageController from '../../../framework/controllers/ViewAllPageController'
import {withRouter} from 'react-router-dom'

const ViewAll = (props) => {

    const userDecision = props.location.state && props.location.state.pageDecision

    const [header] = React.useState(ViewAllPageController.getViewAllHeader(userDecision));
    const [table] = React.useState(ViewAllPageController.getViewAllTable(userDecision));
    const [navigation] = React.useState(ViewAllPageController.getViewAllNavigation(userDecision));

    return(

        <div className={ViewAllCss.viewall}>

            <div className={ViewAllCss.container}>

                {header}
                
                {table}

                {navigation}

            </div>

        </div>

    )
}


export default withRouter(ViewAll);