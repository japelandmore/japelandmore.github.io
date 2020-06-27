import React from 'react'
import {Para} from '../../../../../reusable/fonts/Font'
import DeleteFormCss from '../DeleteForm.module.css'

const Description = ({description,description_label}) => {
    
    return(

        <div className={DeleteFormCss.delete_Section}>
            
            <div className={DeleteFormCss.other_details}>
                    
                <span>
                    <Para fontClass={DeleteFormCss.para}>{description_label}&nbsp;</Para>
                    <Para fontClass={DeleteFormCss.three}>{description}</Para>
                </span>
                                                
            </div>
            
        </div>
    )

}

export default Description;