import React from 'react'
import headercss from './header.module.css'
import {One,Six} from '../../../../reusable/fonts'


const Header = ({headerTitle}) => {

    return(

        <div className={headercss.uploadheader} >
            
            <div className={headercss.container}>

                <div className={headercss.header}>

                    <One fontClass={headercss.one}>
                        {headerTitle}
                    </One>
                
                </div>

            </div>
            
        </div>
    )
}

export default Header;