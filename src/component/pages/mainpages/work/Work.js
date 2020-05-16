import React from 'react';
import WorkCss from './Work.module.css';
import {One as HeaderFont,Five,Para} from '../../../reusable/fonts'
// import ReactDOM from 'react-dom';

import konnectore from '../../../assets/image/edited/Konnectore Presentation.png';
import paymonthly from '../../../assets/image/work/Paymonthly - Presentation@2x.png';
import xela from '../../../assets/image/work/Xela - Presentation@2x.png';
import fpgwebsite from '../../../assets/image/edited/FPG Website - Presentation.png';
import udux from '../../../assets/image/edited/udux presentation.png';
import ProjectComponent from './ProjectComponent';
import TestimonialSlider from './testimonial/TestimonialSlider';


const Work = () => {

    const [projectCategories, setProjectCategories] = React.useState({
        all : true,
        uiux : false,
        branding : false,
        webdesign : false,
        businessanalysis : false
    });

    function handleProjectSelection(category){

        if(category === "all"){
            setProjectCategories({all : true});
        }else if(category === "uiux"){
            setProjectCategories({uiux : true});
        }else if(category === "branding"){
            setProjectCategories({branding : true});
        }else if(category === "webdesign"){
            setProjectCategories({webdesign : true});
        }else if(category === "businessanalysis"){
            setProjectCategories({businessanalysis : true});
        }

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
                        <div className={WorkCss.body}>
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container}>

                                    {/* <img src={userresearch} alt="user research icon" /> */}
                                    <div className={WorkCss.circle_icon}>

                                    </div>

                                </div>

                                <div className={WorkCss.body_header}>
                                
                                    <Five fontClass={WorkCss.header_font}>Business Analysis</Five>
                                
                                </div>

                        </div>

                        {/* body */}
                        <div className={WorkCss.body}>
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container}>

                                    {/* <img src={userresearch} alt="user research icon" /> */}
                                    <div className={WorkCss.circle_icon}>

                                    </div>

                                </div>

                                <div className={WorkCss.body_header}>
                                
                                    <Five fontClass={WorkCss.header_font}>Web Design</Five>
                                
                                </div>

                        </div>

                        {/* body */}
                        <div className={WorkCss.body}>
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container}>

                                    {/* <img src={userresearch} alt="user research icon" /> */}
                                    <div className={WorkCss.circle_icon}>

                                    </div>

                                </div>

                                <div className={WorkCss.body_header}>
                                
                                    <Five fontClass={WorkCss.header_font}>UI/UX Design</Five>
                                
                                </div>

                        </div>

                        {/* body */}
                        <div className={WorkCss.body}>
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container}>

                                    {/* <img src={userresearch} alt="user research icon" /> */}
                                    <div className={WorkCss.circle_icon}>

                                    </div>

                                </div>

                                <div className={WorkCss.body_header}>
                                
                                    <Five fontClass={WorkCss.header_font}>Branding</Five>
                                
                                </div>

                        </div>

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
                            
                            <div className={WorkCss.tab_item} onClick={()=>handleProjectSelection("all")}>
                                <Para fontClass={WorkCss.tab_font}>All</Para>
                                <span className={projectCategories.all && WorkCss.line}></span>
                            </div>

                            <div className={WorkCss.tab_item} onClick={()=>handleProjectSelection("uiux")}>
                                <Para fontClass={WorkCss.tab_font}>UI/UX Design</Para>
                                <span className={projectCategories.uiux && WorkCss.line}></span>
                            </div>

                            <div className={WorkCss.tab_item} onClick={()=>handleProjectSelection("branding")}>
                                <Para fontClass={WorkCss.tab_font}>Branding</Para>
                                <span className={projectCategories.branding && WorkCss.line}></span>
                            </div>

                            <div className={WorkCss.tab_item} onClick={()=>handleProjectSelection("webdesign")}>
                                <Para fontClass={WorkCss.tab_font}>Web Design</Para>
                                <span className={projectCategories.webdesign && WorkCss.line}></span>
                            </div>

                            <div className={WorkCss.tab_item} onClick={()=>handleProjectSelection("businessanalysis")}>
                                <Para fontClass={WorkCss.tab_font}>Business Analysis</Para>
                                <span className={projectCategories.businessanalysis && WorkCss.line}></span>
                            </div>

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
                            <ProjectComponent 
                                            WorkCss={WorkCss}
                                            img={konnectore}
                                            image_description="konnectore web and mobile application"
                                            showComponent={projectCategories.all ? true : projectCategories.uiux ? true : false} 
                                            project={"Konnectore Web & Mobile"} 
                                            project_type={"UI/UX Design"} 
                                            company={"FlexiPGroup"} 
                                            year={"2019"} 
                                            project_link={""}>
                        
                                    <Para fontClass={WorkCss.story}>
                                            Konnectore serves as a social talent discovery platform, and is built to 
                                            bridge the gap between vast talents across and beyond Nigerian borders, and 
                                            opportunities that await them. The platform enables users to engage socially, view talents 
                                            on display and to participate as event contestants.
                                    </Para>

                                    <Para fontClass={WorkCss.story}>
                                            Working as the sole designer and UX lead, with a team of developers. I was responsible for 
                                            the product requirements gathering, interface design, user interaction and experience, as 
                                            well as it's brand representation. As depicted by the UI, I priortized the idea of social 
                                            media and embedded its contest features along those lines.
                                    </Para>
                                        
                            </ProjectComponent>

                            {/* body */}
                            <ProjectComponent 
                                            WorkCss={WorkCss}
                                            img={paymonthly} 
                                            image_description="pay monthly web application"
                                            showComponent={projectCategories.all ? true : projectCategories.uiux ? true : false} 
                                            project={"Pay Monthly Web App"} 
                                            project_type={"UI/UX Design"} 
                                            company={"Freelance"} 
                                            year={"2019"} 
                                            project_link={""}>
                        
                                    <Para fontClass={WorkCss.story}>
                                            Pay Monthly is a financial technology company that stands as a credit facilitator for the quick
                                             purchase of items in a select category. The "Pay Monthly" application is t serve as a 
                                             revamp of the existing solution known as "The Credit Store NG". The team wished to partner 
                                             with popular storefronts in the Nigerian e-commerce ecosystem as well as physical stores in order 
                                             to provide credit payment for household items, furniture, electronics, gadgets and a lot more to 
                                             its registered users.
                                    </Para>

                                    <Para fontClass={WorkCss.story}>
                                            My contribution to this project was focused on designing the customized checkout page which users see 
                                            when they select Pay Monthly as a payment option on one of the partner platforms.
                                    </Para>
                                        
                            </ProjectComponent>

                            {/* body */}
                            <ProjectComponent 
                                            WorkCss={WorkCss}
                                            img={xela} 
                                            image_description="xela web and mobile application"
                                            showComponent={projectCategories.all ? true : projectCategories.uiux ? true : false} 
                                            project={"Xela - The idea bank Web App"} 
                                            project_type={"UI/UX Design"} 
                                            company={"Freelance"} 
                                            year={"2019"} 
                                            project_link={""}>
                        
                                    <Para fontClass={WorkCss.story}>
                                            Xela is an African platform that enables users share and browse ideas with the end goal of providing 
                                            financial incentives to users with valuable ideas, and also connecting them with potential partners 
                                            and investors.
                                    </Para>

                                    <Para fontClass={WorkCss.story}>
                                            The product serves as an idea hub that lets any user post ideas easily as concepts for a growing network 
                                            of users and also buy or sell issues as a premium user on the platform. This implies that there will be two 
                                            user types or tiers, basic and premium respectively. All users will be able to create profiles and share ideas 
                                            as posts which can be voted up or down by other users on the platform. However, a premium user has access to a 
                                            feature known as "vault", where they can deposit ideas to be bought by other users, as well as purchase ideas 
                                            themselves.
                                    </Para>
                                        
                            </ProjectComponent>

                            {/* body */}
                            <ProjectComponent 
                                            WorkCss={WorkCss}
                                            img={fpgwebsite} 
                                            image_description="fpg web application"
                                            showComponent={projectCategories.all ? true : projectCategories.uiux ? true : false} 
                                            project={"FPG Website"} 
                                            project_type={"UI/UX Design"} 
                                            company={"FlexiPGroup"} 
                                            year={"2019"} 
                                            project_link={""}>
                        
                                    <Para fontClass={WorkCss.story}>
                                            The project involved the re-design of the company's existing website which required a complete 
                                            overhaul. The initial designs of this interface took me about 9 to 12 days to complete, during which I 
                                            caried out tasks such as client relations, requirements gathering, sketching and wire-framing, interface design and 
                                            prototyping.
                                    </Para>
                                        
                            </ProjectComponent>

                            {/* body */}
                            <ProjectComponent 
                                            WorkCss={WorkCss}
                                            img={udux} 
                                            image_description="udux web and mobile application"
                                            showComponent={projectCategories.all ? true : projectCategories.uiux ? true : false} 
                                            project={"uduX Mobile Application"} 
                                            project_type={"UI/UX Design"} 
                                            company={"Groove Platforms"} 
                                            year={"2019"} 
                                            project_link={""}>
                        
                                    <Para fontClass={WorkCss.story}>
                                            uduX is a music streaming platform that is growing to become the first stop for African music and with exclusive 
                                            partnerships with global players, give access to a robust catalogue of international content in 
                                            varying media types.
                                    </Para>

                                    <Para fontClass={WorkCss.story}>
                                        On this project, I worked with a 3-man product team to develop the user interface, evaluate UX processes and ensure 
                                        that the product was developed according to functional and usability standards captured in the product requirement 
                                        specifications. I also worked closely with the development team to provide adequate guidance in the implementation of 
                                        the design.
                                    </Para>
                                        
                            </ProjectComponent>
                            
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

