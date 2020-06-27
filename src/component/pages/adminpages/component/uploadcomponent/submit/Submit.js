import React from 'react'
import SubmitCss from './Submit.module.css'
import {useSelector} from 'react-redux'
import UploadController from '../../../../../framework/controllers/UploadController';
import Status from '../../../status'

const Submit = ({url,buttontext1,buttontext2,...props}) => {


    const formData = useSelector(state => state.FormData)
    const imageData = useSelector(state => state.ImageData)
    const [projectUploaded,setProjectUploaded] = React.useState(false);
    const [status,setStatus] = React.useState(false);


    function handleSubmit(){
        UploadController.uploadData(url,formData,imageData,setStatus,setProjectUploaded);
    }

    return (
        <>
            {status &&
            <Status status={projectUploaded} section={"admin"} />}

        <div className={SubmitCss.submit}>

            <div className={SubmitCss.container}>

                <div className={SubmitCss.button_container}>

                    <button className={SubmitCss.btn1} onClick={()=>{handleSubmit()}}>{buttontext1}</button>

                    <button className={SubmitCss.btn2} disabled>{buttontext2}</button>

                </div>
                
            </div>

        </div>

        </>

    )
}

export default Submit