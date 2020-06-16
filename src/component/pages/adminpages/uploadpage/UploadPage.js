import React from 'react'
import UploadPageController from '../../../framework/controllers/UploadPageController'


const Upload = () => {

    const [header] = React.useState(UploadPageController.getUploadHeader());
    const [form] = React.useState(UploadPageController.getUploadForm());
    const [imageform] = React.useState(UploadPageController.getUploadImageForm());
    const [submit] = React.useState(UploadPageController.getSubmit());

    return(
    
        <>
            
            {header}

            {form}

            {imageform}

            {submit}

        </>
    
    )

}

export default Upload
