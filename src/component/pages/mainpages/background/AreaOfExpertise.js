import React from 'react';
import {Five} from '../../../reusable/fonts'
import Aos from 'aos'
import 'aos/dist/aos.css'


const AreaOfExpertise = ({Backgroundcss,imageicon,imagealt,header,...props}) => {

    // React.useEffect(()=>{
        Aos.init();
    // })

    return(

        <div className={Backgroundcss.body}>
                                
            {/* Image container */}
            <div className={Backgroundcss.img_container} data-aos="fade-in" data-aos-duration="2000">

                <img src={imageicon} alt={imagealt} />

            </div>

            <div className={Backgroundcss.body_header}>
                                
                <Five fontClass={Backgroundcss.header_font}>{header}</Five>
                                
            </div>

            <div className={Backgroundcss.body_body} data-aos="fade-in" data-aos-duration="2000">

                {props.children}

            </div>

        </div>

    )
}

export default AreaOfExpertise;