import React from 'react';
import {Five,Para} from '../../../reusable/fonts'


const MyServices = ({WorkCss,imgcirc,imgalt,imghov,title,...props}) => {

    const [changeImg, setChangeImg] = React.useState(false);
    
    return(

        <div className={WorkCss.body} id={WorkCss.boid} onMouseEnter={()=>setChangeImg(true)} onMouseLeave={()=>setChangeImg(false)}>
                                
                {/* Image container */}
                <div className={WorkCss.img_container}>

                    {/* <img src={userresearch} alt="user research icon" /> */}
                    <div className={WorkCss.circle_icon} id={WorkCss.circleid}>
                        
                        <img src={changeImg ? imghov : imgcirc} alt={imgalt} ></img>

                    </div>

                </div>

                <div className={WorkCss.body_header}>
                
                    <Five fontClass={WorkCss.header_font} fid={WorkCss.fid}>{title}</Five>

                </div>

                <div className={WorkCss.role_subject} id={WorkCss.roid}>

                    <Para fontClass={WorkCss.para}>
                        {props.children}
                    </Para>

                </div>

        </div>

    )
}

export default MyServices;