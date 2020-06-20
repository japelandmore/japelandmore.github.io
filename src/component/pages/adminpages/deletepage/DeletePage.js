import React from 'react'
import DeletePageController from '../../../framework/controllers/DeletePageController'
import {withRouter} from 'react-router-dom'

const DeletePage = (props) => {

    const userDecision = props.location.state && props.location.state.pageDecision

    const data = props.location.state && props.location.state.data

    const [header] = React.useState(DeletePageController.getDeleteHeader(userDecision));
    const [image] = React.useState(DeletePageController.getDeleteImage(userDecision,data));
    const [title] = React.useState(DeletePageController.getDeleteTitle(userDecision,data));
    const [description] = React.useState(DeletePageController.getDeleteDescription(userDecision,data));
    const [deleteAction] = React.useState(DeletePageController.getDeleteAction(userDecision,data));

    return(
    
        <>            
            {header}

            {image}

            {title}

            {description}

            {deleteAction}
        </>
    
    )

}

export default withRouter(DeletePage);
