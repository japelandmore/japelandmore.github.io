import React from 'react'
import UpdatePageController from '../../../framework/controllers/UpdatePageController'


const UpdatePage = () => {

    const [header] = React.useState(UpdatePageController.getUpdateHeader());
    const [form] = React.useState(UpdatePageController.getUpdateForm());
    const [imageform] = React.useState(UpdatePageController.getUpdateImageForm());
    const [submit] = React.useState(UpdatePageController.getSubmit());

    return(
    
        <>
            
            {header}

            {form}

            {imageform}

            {submit}

        </>
    
    )

}

export default UpdatePage
