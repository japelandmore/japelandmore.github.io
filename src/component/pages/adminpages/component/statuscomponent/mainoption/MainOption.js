import React from 'react'
import {Alpha} from '../../../../../reusable/fonts'
import StatusCss from '../Status.module.css'

const MainOption  = ({status,new_action,buttonText,serverErrAction,notBtnText,try_again,serverErrMsg}) => {
    return (
        <div className={StatusCss.main_option}>
        {
            status  ?                        
                    <Alpha ahref={new_action}>
                        <button>{buttonText}</button>
                    </Alpha>
            :
                serverErrMsg ?              
                    <button onClick={serverErrAction}>
                        {notBtnText}
                    </button>
                :
                    <Alpha ahref={try_again}>
                        <button>TRY AGAIN</button>
                    </Alpha>
        }
        </div>
    )
}

export default MainOption;