import React from 'react';
import {Five} from '../../../reusable/fonts'

const AreaOfExpertise = ({Backgroundcss,imageicon,imagealt,header,...props}) => {

    return(

        <div className={Backgroundcss.body}>
                                
            {/* Image container */}
            <div className={Backgroundcss.img_container}>

                <img src={imageicon} alt={imagealt} />

            </div>

            <div className={Backgroundcss.body_header}>
                                
                <Five fontClass={Backgroundcss.header_font}>{header}</Five>
                                
            </div>

            <div className={Backgroundcss.body_body}>

                {props.children}

            </div>

        </div>

    )
}

export default AreaOfExpertise;