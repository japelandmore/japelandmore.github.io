import React from 'react'
import {Two,Para} from '../../../../../reusable/fonts'
import StatusCss from '../Status.module.css'

const Header = ({status,success,failure,additional_msg,...props}) => {
    
    return(
        <div className={StatusCss.header}>
        {
            status  ?
            <>
                <Two fontClass={StatusCss.two}>
                    {success}
                </Two>           
                <Para fontClass={StatusCss.para}>
                    {additional_msg}
                </Para>
            </>  
            :
            <>
                <Two fontClass={StatusCss.two}>
                    {failure}
                </Two>                           
                <Para fontClass={StatusCss.para}>
                    {additional_msg}
                </Para>
            </>
        }
        </div>
    )

}

export default Header;