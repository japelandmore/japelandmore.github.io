import React from 'react';
import LandingPageCss from './LandingPage.module.css';
import {One as HeaderFont,Para as BodyFont,Alpha} from '../../../reusable/fonts';
import profile_image from '../../../assets/image/introduction/avatar@2x.png';
import pageurl from '../../../framework/pageurl'

const LandingPage = () => {

    return(

        <div className={LandingPageCss.landingpage}>

            <section className={LandingPageCss.profile}>

                {/* Image Section */}
                <section className={LandingPageCss.profile_image}>

                    <div className={LandingPageCss.container}>

                        <div className={LandingPageCss.img_container}>

                            <img src={profile_image} alt="michevious open-mouthed happy vibrant face gesture"></img>

                        </div>

                    </div>

                </section>

                {/* Text Section */}
                <section className={LandingPageCss.profile_description}>

                    <div className={LandingPageCss.container}>

                        {/* Header */}
                        <div className={LandingPageCss.header}>
                            <HeaderFont fontClass={LandingPageCss.headfont}>Hi!</HeaderFont>
                        </div>

                        {/* Body */}
                        <div className={LandingPageCss.body}>
                            <BodyFont fontClass={LandingPageCss.bodyfont}>
                                My name is Jeffery Abdulateef, I'm a <span style={{fontWeight:"bolder"}}>UI/UX Developer</span> 
                                (last 4 years),and I now double as a software <span style={{fontWeight:"bolder"}}>Business Analyst</span>.
                            </BodyFont>

                            <BodyFont fontClass={LandingPageCss.bodyfont}>
                                In the last years, I have worked in roles that enable me create new solutions,
                                to both simple and complex problems, which add value through interactive product 
                                design, while also making sure that product owners don't forget that their mission
                                is to bring value to people's lives.
                            </BodyFont>

                            <BodyFont fontClass={LandingPageCss.bodyfont}>

                                <span style={{fontWeight:"bolder"}}>
                                    Right now, I'm in Lagos, working at FlexiP Group Technologies to build an awesome
                                    product design team.
                                </span>
                                
                            </BodyFont>
                        </div>

                    </div>

                    {/* call to action section*/}
                    <section className={LandingPageCss.call_to_action}>

                        <div className={LandingPageCss.container}>

                            <Alpha ahref={pageurl.CONTACT_ME_URL}>
                                <button className={LandingPageCss.buttonbold}>

                                    <BodyFont fontClass={LandingPageCss.buttonfont}>Get In Touch</BodyFont>

                                </button>
                            </Alpha>

                            <Alpha ahref={pageurl.WORK_PAGE_URL}>
                                <button className={LandingPageCss.buttonstripe}>
                                
                                    <BodyFont fontClass={LandingPageCss.buttonfont}>See my work</BodyFont>
                                
                                </button>
                            </Alpha>

                        </div>

                    </section>

                </section>


            </section>
            
        
        </div>

    )
}

export default LandingPage;

