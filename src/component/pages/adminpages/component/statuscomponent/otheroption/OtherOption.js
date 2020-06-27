import React from 'react'
import {Alpha,Para} from '../../../../../reusable/fonts'
import StatusCss from '../Status.module.css'
import pageurl from '../../../../../framework/url/pageurl'

const OtherOption  = () => {
    
    return(
        
        <div className={StatusCss.other_option}>
            <Alpha ahref={pageurl.ADMIN_URL}>
                <Para fontClass={StatusCss.para} >BACK TO MAIN PAGE</Para>
            </Alpha>
        </div>

    )

}

export default OtherOption;