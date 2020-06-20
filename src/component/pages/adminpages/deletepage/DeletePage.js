import React from 'react'
import DeletePageController from '../../../framework/controllers/DeletePageController'

const DeletePage = () => {

    const [header] = React.useState(DeletePageController.getDeleteHeader());
    const [image] = React.useState(DeletePageController.getDeleteImage());
    const [title] = React.useState(DeletePageController.getDeleteTitle());
    const [description] = React.useState(DeletePageController.getDeleteDescription());
    const [deleteAction] = React.useState(DeletePageController.getDeleteAction());

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

export default DeletePage;
