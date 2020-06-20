import React from 'react'
import UploadPageController from '../../../framework/controllers/UploadPageController'
import {withRouter} from 'react-router-dom'

const Upload = (props) => {

    const userDecision = props.location.state && props.location.state.pageDecision

    const [header] = React.useState(UploadPageController.getUploadHeader(userDecision));
    const [form] = React.useState(UploadPageController.getUploadForm(userDecision));
    const [imageform] = React.useState(UploadPageController.getUploadImageForm(userDecision));
    const [submit] = React.useState(UploadPageController.getSubmit(userDecision));

    return(
    
        <>
            
            {header}

            {form}

            {imageform}

            {submit}

        </>
    
    )

}

export default withRouter(Upload) 
