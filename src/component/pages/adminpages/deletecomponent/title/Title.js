import React from 'react'
import {Para} from '../../../../reusable/fonts'
import DeleteFormCss from '../DeleteForm.module.css'

const Title = ({title,name_label}) => {
    
    return(
        <div className={DeleteFormCss.delete_Section}>
            <div className={DeleteFormCss.other_details}>
                    
                <span>
                    <Para fontClass={DeleteFormCss.para}>{name_label}&nbsp;</Para>
                    <Para fontClass={DeleteFormCss.three}>{title}</Para>
                </span>
                                                
            </div>
        </div>
    )

}

export default Title;