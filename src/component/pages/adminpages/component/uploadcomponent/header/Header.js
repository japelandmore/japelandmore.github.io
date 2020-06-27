import React from 'react'
import headercss from './header.module.css'
import {One,Six} from '../../../../../reusable/fonts'


const Header = ({firstFormValidated,headerTitle}) => {

    return(

        <div className={headercss.uploadheader} >
            <div className={headercss.container}>

                <div className={headercss.header}>

                    <One fontClass={headercss.one}>
                        {headerTitle}
                    </One>
                    
                {
                !firstFormValidated ?  

                    <Six fontClass={headercss.six}>
                        Complete the form below then click the
                        <span style={{color:"#fff",fontFamily:"encode_sans_medium"}}>
                            &nbsp;&nbsp;' Upload Button '
                        </span>.
                    </Six>

                :

                    <Six fontClass={headercss.six}>
                        Upload preferred image then click the
                        <span style={{color:"#fff",fontFamily:"encode_sans_medium"}}>
                            &nbsp;&nbsp;'Upload Button '
                        </span>.
                    </Six>
                
                }

                </div>

            </div>
        </div>
    )
}

export default Header;