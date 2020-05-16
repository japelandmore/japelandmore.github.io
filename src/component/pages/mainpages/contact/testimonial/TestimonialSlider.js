import React from 'react';
import TestimonialComponent from './TestimonialComponent';
import {Para} from '../../../../reusable/fonts'
import TCC from './TestimonialSlider.module.css';



const TestimonialSlider = ({OtherCssLeft,OtherCssRight}) => {

    const [sliderCollection] = React.useState([
        {
            id: "0",
            sliderItem: 
            <TestimonialComponent WorkCss={TCC} OtherCssLeft={OtherCssLeft} OtherCssRight={OtherCssRight} customer_name="Lusayo Bonge" customer_company="Partner, Form Plus">
                                
                <Para fontClass={TCC.story}>
                    udux is music streaming platform that is growing to become the first stop for African music, and with exclusive
                    partnerships with global players, give access to a robust catalogue of international content in varying media types.
                </Para>

            </TestimonialComponent> 

        },
        {
            id: "1",
            sliderItem: 
            <TestimonialComponent WorkCss={TCC} OtherCssLeft={OtherCssLeft} OtherCssRight={OtherCssRight} customer_name="Alison Krauss" customer_company="CEO Uduxa" >
                                
                <Para fontClass={TCC.story}>
                    udux is music streaming platform that is growing to become the first stop for African music, and with exclusive
                    partnerships with global players, give access to a robust catalogue of international content in varying media types.
                </Para>


            </TestimonialComponent> 

        }
    ]);

    const [shouldSlide,setShouldSlide] = React.useState(false)
    const [id,setId] = React.useState(0)

    function autoSlider() {
        setTimeout(()=>{
            setShouldSlide(!shouldSlide)
            check()
        },3000)
    }autoSlider()

    function check(){
        let idea = id;
        if(!shouldSlide){
            idea = idea === sliderCollection.length-1 ? 0 : idea + 1;
            setId(idea)    
        }
    }

    return (
        <div key={id} className={TCC.slide_effect}>
            {sliderCollection[id].sliderItem}
        </div>
    )
}

export default TestimonialSlider
