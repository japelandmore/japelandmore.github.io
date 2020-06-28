import React from 'react'
import WorkCss from '../Work.module.css'
import {Three,Five} from '../../../../reusable/fonts'
import MyServices from '../MyServices';
import MyServiceRole from '../MyServicesRole';
import businessanalysysimg from '../../../../assets/image/work/new/file (3).svg';
import webdesignimg from '../../../../assets/image/work/new/computer coding.svg';
import uximg from '../../../../assets/image/work/new/web-design.svg';
import branding from '../../../../assets/image/work/new/artistic.svg';
import bahov from '../../../../assets/image/work/new/hover/file.svg';
import webhov from '../../../../assets/image/work/new/hover/computer coding.svg';
import uxhov from '../../../../assets/image/work/new/hover/web-design.svg';
import brandhov from '../../../../assets/image/work/new/hover/artistic.svg';
import MyServicesRole from '../MyServicesRole';
import loader from '../../../../assets/image/gif/loader.gif'
import TestimonialSlider from '../testimonial/TestimonialSlider';
import Aos from 'aos'
import 'aos/dist/aos.css'

const MainPage = ({ProjectTab,project}) => {

    Aos.init();

    return (
        
        <>
        
            <section className={WorkCss.my_services}>

                {/* header */}
                <div className={WorkCss.header} data-aos="fade-in" data-aos-duration="2000">

                    <Five fontClass={WorkCss.header_font}>MY SERVICES</Five>

                </div>

                <div className={WorkCss.body_item} data-aos="fade-in" data-aos-duration="2000">

                    {/* body */}
                    <MyServices WorkCss={WorkCss} imgcirc={businessanalysysimg} imghov={bahov}
                        imgalt={"business analysis icon"} title={"Business Analysis"}>
                            {MyServiceRole.BusinessAnalysis()}
                    </MyServices>

                    <MyServices WorkCss={WorkCss} imgcirc={webdesignimg} imghov={webhov}
                        imgalt={"web design icon"} title={"Web Design"} >
                            {MyServicesRole.WebDesign()}
                    </MyServices>
                    
                    <MyServices WorkCss={WorkCss} imgcirc={uximg} imghov={uxhov}
                        imgalt={"ui / ux icon"} title={"UI/UX Design"} >
                            {MyServicesRole.UX()}
                    </MyServices>
                    
                    <MyServices WorkCss={WorkCss} imgcirc={branding} imghov={brandhov}
                        imgalt={"painting icon"} title={"Branding"} >
                            {MyServicesRole.Branding()}
                    </MyServices>

                </div>

                {/* body */}
                <div className={WorkCss.body}>
                    
                        <button className={WorkCss.hire_btn}>
                            Hire Me
                        </button>

                </div>

                </section>

                {/* PROFESSIONAL SUMMARY */}
                <section className={WorkCss.my_projects}>

                {/* header */}
                <div className={WorkCss.header} data-aos="fade-in" data-aos-duration="2000">

                    <Five fontClass={WorkCss.header_font}>MY PROJECTS</Five>

                </div>

                <div className={WorkCss.nav_sect} data-aos="fade-in" data-aos-duration="2000">

                    <div className={WorkCss.nav_left}>
                        <span className={WorkCss.nav_arrow}>&#60;</span>
                    </div>

                    <div className={WorkCss.tab_section}>

                        { ProjectTab }
                        
                    </div>

                    <div className={WorkCss.nav_left}>
                        <span className={WorkCss.nav_arrow}>&#62;</span>
                    </div>

                </div>

                <div className={WorkCss.body_item} data-aos="fade-in" data-aos-duration="2000">

                        {/* NO RESULTS */}
                        {!project[0] ?
                        <span style={{width:"100%",display:"flex",padding:"20px 0",
                                    height: "100%",alignItems:"center",justifyContent:"center",
                                    position:"absolute",zIndex:"-1"}}>
                            <Three fontStyle={{color:"#e4e4e4"}}>NO RESULTS</Three>
                            <div className={WorkCss.loader_container}>
                                <img src={loader} alt="loader" />
                            </div>
                        </span>
                        :
                            <>
                                <span style={{width:"100%",display:"flex",padding:"20px 0",
                                            height: "100%",alignItems:"center",justifyContent:"center",
                                            position:"absolute",zIndex:"-1"}}>
                                    <h3 style={{color:"#e4e4e4"}}>NO RESULTS</h3>
                                    
                                </span>

                                {project.map((s) => {return s;}) }
                                
                            </>
                        }
                </div>

                </section>

                {/* PROFESSIONAL SUMMARY */}
                <section className={WorkCss.testimonials}>

                {/* header */}
                <div className={WorkCss.header} data-aos="fade-in" data-aos-duration="2000">

                    <Five fontClass={WorkCss.header_font}>TESTIMONIALS</Five>

                </div>

                <div className={WorkCss.boundary}>

                    <div className={WorkCss.body_item} data-aos="fade-in" data-aos-duration="2000">

                        {/* body */}
                        <TestimonialSlider WorkCss={WorkCss}/>

                    </div>

                </div>

                </section>
            
        </>

    )
}

export default MainPage