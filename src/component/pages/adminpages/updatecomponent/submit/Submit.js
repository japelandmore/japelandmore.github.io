import React from 'react'
import SubmitCss from './Submit.module.css'

const Submit = ({buttontext1,buttontext2,...props}) => {
    return (

        <div className={SubmitCss.submit}>

            <div className={SubmitCss.container}>

                <div className={SubmitCss.button_container}>

                    <button className={SubmitCss.btn1}>{buttontext1}</button>

                    <button className={SubmitCss.btn2} disabled="true">{buttontext2}</button>

                </div>
                
            </div>

        </div>

    )
}

export default Submit