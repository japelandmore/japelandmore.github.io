import React from 'react';
import {Five,Para} from '../../../../reusable/fonts'


const TestimonialComponent = ({WorkCss,OtherCssLeft,OtherCssRight,customer_name,customer_company,imgsrc,...props}) => {
    
    return (
        
        <div className={WorkCss.body}>

            {/* SLIDER */}
            <div className={WorkCss.slider}>

                <div className={`${WorkCss.left} ${OtherCssLeft}`}>

                    <img src={imgsrc} alt="" ></img>

                </div>

                <div className={`${WorkCss.right} ${OtherCssRight}`}>

                    <div className={WorkCss.header_title}>
                                                    
                        <Five fontClass={WorkCss.header_font}>{customer_name}</Five>
                                                
                        <Para fontClass={WorkCss.header_company} >{customer_company}</Para>
                                                
                    </div>

                    <div className={WorkCss.body_body}>
                                                
                        {props.children}                   

                    </div>

                </div>

            </div>

        </div>

    )

}

export default TestimonialComponent;