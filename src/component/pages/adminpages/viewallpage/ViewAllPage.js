import React from 'react'
import ViewAllCss from './ViewAllPage.module.css'
import ViewAllPageController from '../../../framework/controllers/ViewAllPageController'

const ViewAll = () => {

    const [header] = React.useState(ViewAllPageController.getViewAllHeader());
    const [table] = React.useState(ViewAllPageController.getViewAllTable());
    const [navigation] = React.useState(ViewAllPageController.getViewAllNavigation());

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


export default ViewAll