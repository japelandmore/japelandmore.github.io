import React from 'react'
import SubmitCss from './Submit.module.css'
import UpdateController from '../../../../framework/controllers/UpdateController'
import {useSelector} from 'react-redux'

const Submit = ({url,buttontext1,buttontext2,...props}) => {

    const formData=useSelector(state => state.FormData)

    function handleSubmit(){
        UpdateController.uploadData(url,formData);        
    }

    return (

        <div className={SubmitCss.submit}>

            <div className={SubmitCss.container}>

                <div className={SubmitCss.button_container}>

                    <button className={SubmitCss.btn1} onClick={()=>{handleSubmit()}}>{buttontext1}</button>

                    <button className={SubmitCss.btn2} disabled="true">{buttontext2}</button>

                </div>
                
            </div>

        </div>

    )
}

export default Submit