import React from 'react';
import WorkCss from './Work.module.css';
import {One as HeaderFont,Five} from '../../../reusable/fonts'

// import konnectore from '../../../assets/image/edited/Konnectore Presentation.png';
// import paymonthly from '../../../assets/image/work/Paymonthly - Presentation@2x.png';
// import xela from '../../../assets/image/work/Xela - Presentation@2x.png';
// import fpgwebsite from '../../../assets/image/edited/FPG Website - Presentation.png';
// import udux from '../../../assets/image/edited/udux presentation.png';

import ProjectComponent from './ProjectComponent';
import TestimonialSlider from './testimonial/TestimonialSlider';
import MyServices from './MyServices';

import businessanalysysimg from '../../../assets/image/work/new/file (3).svg';
import webdesignimg from '../../../assets/image/work/new/computer coding.svg';
import uximg from '../../../assets/image/work/new/web-design.svg';
import branding from '../../../assets/image/work/new/artistic.svg';
import MyServiceRole from './MyServicesRole';

import bahov from '../../../assets/image/work/new/hover/file.svg';
import webhov from '../../../assets/image/work/new/hover/computer coding.svg';
import uxhov from '../../../assets/image/work/new/hover/web-design.svg';
import brandhov from '../../../assets/image/work/new/hover/artistic.svg';
import MyServicesRole from './MyServicesRole';

import WorkPageController from '../../../framework/controllers/WorkPageController';

import ProjectHeaderTab from './ProjectHeaderTab';

import tabitems from './ProjectHeaderTabItems';



const Work = () => {

    const [projectCategories, setProjectCategories] = React.useState({
        category: "All"
    });

    const [project,setProject] = React.useState([]);

    React.useEffect(()=>{

        function loadProjects(){
            !project[0] && WorkPageController.handleLoad(setProject,projectCategories.category,WorkCss,ProjectComponent);

        }

        loadProjects();

    })

    const ProjectTab = tabitems.map((p)=>{
        return <ProjectHeaderTab key={p.id} WorkCss={WorkCss} handleProjectSelection={handleProjectSelection} 
                projectCategories={projectCategories.category} category={p.category} />
    })


    function handleProjectSelection(category){
        setProjectCategories({category : category});
        WorkPageController.handleLoad(setProject,category,WorkCss,ProjectComponent);
    }

    return(

        <div className={WorkCss.work}>

            <div className={WorkCss.topheader}>
                
                <HeaderFont fontClass={WorkCss.headfont}>My Work</HeaderFont>
                
            </div>

            <div className={WorkCss.underlap_container}></div>

            <div className={WorkCss.container}>

                {/* PROFESSIONAL SUMMARY */}
                <section className={WorkCss.my_services}>

                    {/* header */}
                    <div className={WorkCss.header}>

                        <Five fontClass={WorkCss.header_font}>MY SERVICES</Five>

                    </div>

                    <div className={WorkCss.body_item}>

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
                    <div className={WorkCss.header}>

                        <Five fontClass={WorkCss.header_font}>MY PROJECTS</Five>

                    </div>

                    <div className={WorkCss.nav_sect}>

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

                    <div className={WorkCss.body_item}>

                            {/* NO RESULTS */}
                            <span style={{width:"100%",display:"flex",padding:"20px 0",
                                        height: "100%",alignItems:"center",justifyContent:"center",
                                        position:"absolute",zIndex:"-1"}}>
                                <h3 style={{color:"#e4e4e4"}}>NO RESULTS</h3>
                            </span>

                            {/* body */}
                            { project.map((s) => {return s;}) }
  
                    </div>

                </section>


                {/* PROFESSIONAL SUMMARY */}
                <section className={WorkCss.testimonials}>

                    {/* header */}
                    <div className={WorkCss.header}>

                        <Five fontClass={WorkCss.header_font}>TESTIMONIALS</Five>

                    </div>

                    <div className={WorkCss.boundary}>

                        <div className={WorkCss.body_item}>

                            {/* body */}
                            <TestimonialSlider WorkCss={WorkCss}/>

                        </div>

                    </div>

                </section>

            </div>

        </div>

    )
}

export default Work;