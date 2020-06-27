import React from 'react'
import HeaderCss from './Header.module.css'
import {One,Para} from '../../../../../reusable/fonts/Font'


const Header = ({title,description}) => {
    
    return(
        
        <div className={HeaderCss.header}>
            <One fontClass={HeaderCss.one}>{title}</One>
            <Para fontClass={HeaderCss.para}>{description}</Para>
        </div>

    )

}

export default Header;