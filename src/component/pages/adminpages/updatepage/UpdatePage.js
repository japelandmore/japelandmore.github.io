import React from 'react'
import UpdatePageController from '../../../framework/controllers/UpdatePageController'
import {withRouter} from 'react-router-dom'

const UpdatePage = (props) => {

    const userDecision = props.location.state && props.location.state.pageDecision

    const data = props.location.state && props.location.state.data
    
    const [header] = React.useState(UpdatePageController.getUpdateHeader(userDecision));
    const [form] = React.useState(UpdatePageController.getUpdateForm(userDecision,data));
    const [imageform] = React.useState(UpdatePageController.getUpdateImageForm(userDecision,data));
    const [submit] = React.useState(UpdatePageController.getSubmit(userDecision));

    return(
    
        <>
            
            {header}

            {form}

            {imageform}

            {submit}

        </>
    
    )

}

export default withRouter(UpdatePage) 
