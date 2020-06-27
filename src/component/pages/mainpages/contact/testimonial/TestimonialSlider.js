import React from 'react';
import TestimonialComponent from './TestimonialComponent';
import {Para,Three} from '../../../../reusable/fonts'
import TCC from './TestimonialSlider.module.css';
import TestimonialController from '../../../../framework/controllers/TestimonialController'
import ReactMarkdown from 'react-markdown';
import loader from '../../../../assets/image/gif/loader.gif'

const TestimonialSlider = ({OtherCssLeft,OtherCssRight}) => {

    const [data,setData] = React.useState([]);

    React.useEffect(()=>{
        !data[0] && TestimonialController.queryData(setData);
    },[data])
    
    const sliderCollection = data.map((da)=>{

        return(
            {
                id:             data.indexOf(da),
                sliderItem :    <TestimonialComponent WorkCss={TCC} OtherCssLeft={OtherCssLeft} 
                                        OtherCssRight={OtherCssRight} customer_name={da.title} 
                                        customer_company={da.description} imgsrc={da.imageurl} >
                                    <Para fontClass={TCC.story}>
                                        <ReactMarkdown source={da.paragraph} />
                                    </Para>
                                </TestimonialComponent>
            }
        )

    })

    const [shouldSlide,setShouldSlide] = React.useState(false)
    const [id,setId] = React.useState(0)

    function autoSlider() {
        setTimeout(()=>{
            setShouldSlide(!shouldSlide)
            check()
        },7000)
    }autoSlider()

    function check(){
        let idea = id;
        if(!shouldSlide){
            idea = idea >= sliderCollection.length-1 ? 0 : idea + 1;
            setId(idea)    
        }
    }

    return (
        <div key={id} className={`${TCC.slide_effect} ${!sliderCollection[0] && TCC.noslide}`} >
            {sliderCollection[0] ? 
                sliderCollection[id].sliderItem 
            : 
                
                <div className={TCC.loader_container}>
                    <Three fontStyle={{color:"#e4e4e4"}}>NO RESULTS</Three>
                    <img src={loader} alt="loader icon"/>
                </div>
            }
        </div>
    )
}

export default TestimonialSlider
