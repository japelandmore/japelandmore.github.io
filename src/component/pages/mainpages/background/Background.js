import React from 'react';
import Backgroundcss from './Background.module.css';
import {One as HeaderFont,Three as Fur,Five,Para} from '../../../reusable/fonts'
import userresearch from '../../../assets/image/background/user Research.svg';
import interfacedesign from '../../../assets/image/background/interface design.svg';
import webdesign from '../../../assets/image/background/Web design.svg';
import usabilityimg from '../../../assets/image/background/Gameboy 1.svg';
import printer from '../../../assets/image/background/2561375-printer.svg';


const Background = () => {

    return(

        <div className={Backgroundcss.background}>
            
            <div className={Backgroundcss.printer_section} onClick={()=>window.print()}>
                <div className={Backgroundcss.image_container}>
                <img src={printer} alt="printer icon" />
                </div>

            </div>

            <div className={Backgroundcss.topheader}>
                
                    <HeaderFont fontClass={Backgroundcss.headfont}>My Background</HeaderFont>
                
            </div>

            <div className={Backgroundcss.container}>

                {/* PROFESSIONAL SUMMARY */}
                <section className={Backgroundcss.professional_summary}>

                    {/* header */}
                    <div className={Backgroundcss.header}>
                        <Five fontClass={Backgroundcss.header_font}>PROFESSIONAL SUMMARY</Five>
                    </div>

                    {/* body */}
                    <div className={Backgroundcss.body}>
                        <Para fontClass={Backgroundcss.body_font}>
                            I have gained professional experience working
                            as a Business Analyst and UI/UX designer in the 
                            last 4 years. My prior exposure to the logical implementation
                            of programming tools in web development enables me to design functional,
                            usable and intuitive interfaces which depict how objects and actions
                            that are part of an appplication interrelate in ways that mirror and  support
                            real-life user actions.
                            Additionally, in these roles, I have become familiar with illustrating Business 
                            processes and recommending digital automation processes that enable businesses become more 
                            customer-focused, responsive, and also take more.
                        </Para>
                    </div>

                </section>

                 {/* AREA OF EXPERTISE */}
                 <section className={Backgroundcss.area_of_expertise}>

                    {/* header */}
                    <div className={Backgroundcss.header}>
                        <Five fontClass={Backgroundcss.header_font}>AREA OF EXPERTISE</Five>
                    </div>

                    <div className={Backgroundcss.body_item}>

                            {/* body */}
                            <div className={Backgroundcss.body}>
                                
                                {/* Image container */}
                                <div className={Backgroundcss.img_container}>

                                    <img src={userresearch} alt="user research icon" />

                                </div>

                                <div className={Backgroundcss.body_header}>
                                
                                    <Five fontClass={Backgroundcss.header_font}>User Research</Five>
                                
                                </div>

                                

                                <div className={Backgroundcss.body_body}>

                                    <li>
                                        {/* <Para fontClass={Backgroundcss.body_font}> */}
                                            Gather requirements and consumer needs through user 
                                            research
                                        {/* </Para> */}
                                    </li>

                                    <li>
                                        {/* <Para fontClass={Backgroundcss.body_font}> */}
                                            Conduct in-depth interviews
                                        {/* </Para> */}
                                    </li>

                                    <li>
                                        {/* <Para fontClass={Backgroundcss.body_font}> */}
                                            Make contextual inquiries and field/dairy studies.
                                        {/* </Para> */}
                                    </li>

                                    <li>
                                        {/* <Para fontClass={Backgroundcss.body_font}> */}
                                            Lead persona creation to optimize user flows and user journeys
                                        {/* </Para> */}
                                    </li>

                                    <li>
                                        {/* <Para fontClass={Backgroundcss.body_font}> */}
                                            Develop site maps and construct wire-frames that facilitate effortless 
                                            navigation
                                        {/* </Para> */}
                                    </li>

                                </div>

                            </div>

                            {/* body */}
                            <div className={Backgroundcss.body}>
                                
                                {/* Image container */}
                                <div className={Backgroundcss.img_container}>

                                    <img src={interfacedesign} alt="interface design icon" />

                                </div>

                                <div className={Backgroundcss.body_header}>
                                
                                    <Five fontClass={Backgroundcss.header_font}>Interface Design</Five>
                                
                                </div>

                                <div className={Backgroundcss.body_body}>

                                    <li>
                                        {/* <Para fontClass={Backgroundcss.body_font}> */}
                                            Incorporate brand & visual identity into design of website
                                            or web application
                                        {/* </Para> */}
                                    </li>

                                    <li>
                                        {/* <Para fontClass={Backgroundcss.body_font}> */}
                                            High proficiency with design & prototyping tools such as Adobe XD,
                                            Figma, Sketch, InVision, Photoshop, Illustrator
                                        {/* </Para> */}
                                    </li>

                                    <li>
                                        {/* <Para fontClass={Backgroundcss.body_font}> */}
                                            Design for Web, Mobile & Wearable Interface design
                                        {/* </Para> */}
                                    </li>

                                </div>

                            </div>

                            {/* body */}
                            <div className={Backgroundcss.body}>
                                
                                {/* Image container */}
                                <div className={Backgroundcss.img_container}>

                                    <img src={webdesign} alt="web design icon" />

                                </div>

                                <div className={Backgroundcss.body_header}>
                                
                                    <Five fontClass={Backgroundcss.header_font}>Web Design</Five>
                                
                                </div>

                                <div className={Backgroundcss.body_body}>

                                    <li>
                                        {/* <Para fontClass={Backgroundcss.body_font}> */}
                                            Build functional and responsive websites using design and
                                            publishing languages/tools such as HTML & CSS, Reactjs, 
                                            WordPress
                                        {/* </Para> */}
                                    </li>

                                </div>

                            </div>

                            {/* body */}
                            <div className={Backgroundcss.body}>
                                
                                {/* Image container */}
                                <div className={Backgroundcss.img_container}>

                                    <img src={usabilityimg} alt="usability testing icon" />

                                </div>

                                <div className={Backgroundcss.body_header}>
                                
                                    <Five fontClass={Backgroundcss.header_font}>Usability Testing</Five>
                                
                                </div>

                                <div className={Backgroundcss.body_body}>

                                    <li>
                                        {/* <Para fontClass={Backgroundcss.body_font}> */}
                                            Plan, supervise and participate in all phases of usability testing
                                            in lab and remote settings.
                                        {/* </Para> */}
                                    </li>

                                    <li>
                                        {/* <Para fontClass={Backgroundcss.body_font}> */}
                                            Produce, gather, define and challenge assumptions
                                        {/* </Para> */}
                                    </li>

                                </div>

                            </div>



                    </div>

                </section>

                {/* WORK EXPERIENCE */}
                <section className={Backgroundcss.work_experience}>

                    {/* header */}
                    <div className={Backgroundcss.header}>
                        <Five fontClass={Backgroundcss.header_font}>WORK EXPERIENCE</Five>
                    </div>

                    {/* body */}
                    <div className={Backgroundcss.body_item}>

                            {/* Business Analyst (UI/UX Designer) */}
                            <div className={Backgroundcss.body}>
                                
                                <div className={Backgroundcss.work_header}>
                                    
                                    {/* main header */}
                                    <Fur fontClass={Backgroundcss.work_title}>Business Analyst (UI/UX Designer)</Fur>

                                    {/* date */}
                                    <Para fontClass={Backgroundcss.work_date}>
                                        JAN 2018 - PRESENT
                                    </Para>
                                </div>
                                
                                <div className={Backgroundcss.others}>
                                        {/* company header*/}
                                        <Para fontClass={Backgroundcss.company_title}>Flexip Group Technologies & Solutions</Para>

                                        {/* company description */}
                                        <Para fontClass={Backgroundcss.body_font}>
                                            I currently work with a team of developers to create, review and analyse
                                            our development standards to ensure end-user goals are met, as well as business 
                                            requirements of the company. I translate findings acquired from data gathering
                                            activities into wireframes and UI prototypes in order to communicate the 
                                            potential outcomes of the product.
                                        </Para>

                                        {/* company role */}
                                        <Para fontClass={Backgroundcss.role_header}>
                                            In this role I equally work as a UX Designer to:
                                        </Para>
                                        <li>
                                            Carry out business problem assessments while performing requirements discovery
                                            and documentation.
                                        </li>

                                        <li>
                                            Manage testing cycles, including test plan creation, development of scripts and 
                                            co-ordination of user acceptance testing for end-user products and enterprise 
                                            applications.
                                        </li>

                                        <li>
                                            Work closely with software developers and testing team members to design and develop 
                                            robust software solutions to meet client requirements for functionality, scalability
                                            and performance.
                                        </li>

                                        <li>
                                            Derived conceptual designs and UML diagrams from business objectives to deliver software 
                                            and applications according to specifications for usability, performance and functionality.
                                        </li>

                                        <li>
                                            Complete full redesigns of existing websites to improve navigation, enhance visuals with 
                                            intense focus on usability improvements.
                                        </li>
                                
                                </div>

                            </div>

                            {/* UI/UX Developer */}
                            <div className={Backgroundcss.body}>

                                <div className={Backgroundcss.work_header}>
                                    
                                    {/* main header */}
                                    <Fur fontClass={Backgroundcss.work_title}>UI/UX Developer</Fur>

                                    {/* date */}
                                    <Para fontClass={Backgroundcss.work_date}>
                                        AUG 2018 - DEC 2018
                                    </Para>
                                </div>

                                <div className={Backgroundcss.others}>
                                
                                        {/* company header*/}
                                        <Para fontClass={Backgroundcss.company_title}>Groove Platforms</Para>

                                        {/* company description */}
                                        <Para fontClass={Backgroundcss.body_font}>
                                            While at Groove, I worked with the company's product team to ensure that 
                                            the company's flagship product was developed according to the usability standards 
                                            captured in the product specs by working hand in hand with the product and development
                                            team to evaluate UX processes.
                                        </Para>

                                        {/* company role */}
                                        <Para fontClass={Backgroundcss.role_header}>
                                            In this role I achieved the following:
                                        </Para>
                                        <li>
                                            Reduced risks and uncertainty by conceptualising outcomes of the ideation process to fast-track validation
                                            of assumptions using mockup interfaces and prototypes to test documented user flows, and simulate
                                            optimized user experiences.
                                        </li>

                                        <li>
                                            Optimised the feature implementation by performing usability tests and data gathering operations through the use 
                                            of closed-user-group-testing exercises on unreleased versions of the software.
                                        </li>

                                        <li>
                                            Designed standard quality user interfaces for landing pages, dashboards and other content management tools that fall
                                            in line with product brand guidelines and design thinking principles using Adobe XD, Sketch and Photoshop.
                                        </li>
                                
                                </div>

                            </div>

                            {/* UI/UX Developer 2 */}
                            <div className={Backgroundcss.body}>

                                <div className={Backgroundcss.work_header}>
                                    
                                    {/* main header */}
                                    <Fur fontClass={Backgroundcss.work_title}>UI/UX Developer</Fur>

                                    {/* date */}
                                    <Para fontClass={Backgroundcss.work_date}>
                                        AUG 2018 - DEC 2018
                                    </Para>
                                </div>

                                <div className={Backgroundcss.others}>
                                
                                        {/* company header*/}
                                        <Para fontClass={Backgroundcss.company_title}>MCOMM Solutions & Services</Para>

                                        {/* company description */}
                                        <Para fontClass={Backgroundcss.body_font}>
                                            This was where I first gained experience in UI/UX Design and fully took on the role, 
                                            while also wearing the hat of a web designer. 
                                        </Para>

                                        {/* company role */}
                                        <Para fontClass={Backgroundcss.role_header}>
                                            In this role I:
                                        </Para>
                                        <li>
                                            Worked as a front-end developer using web programming languages such as HTML & CSS, and 
                                            WordPress CMS to develop tools that were used to enrich the internal content distributions &
                                            promotion services provided by the company.
                                        </li>

                                        <li>
                                            Designed user interfaces for mobile and web applications from a conceptual phase to product launch.
                                        </li>

                                        <li>
                                            Simulated user experiences for websites and software solutions using wire-framing and prototyping tools.
                                        </li>

                                </div>

                            </div>

                            {/* Web Developer */}
                            <div className={Backgroundcss.body}>

                                <div className={Backgroundcss.work_header}>
                                    
                                    {/* main header */}
                                    <Fur fontClass={Backgroundcss.work_title}>Web Developer</Fur>

                                    {/* date */}
                                    <Para fontClass={Backgroundcss.work_date}>
                                        JUL 2014 - SEP 2015
                                    </Para>
                                </div>

                                <div className={Backgroundcss.others}>
                                
                                        {/* company header*/}
                                        <Para fontClass={Backgroundcss.company_title}>Antigravity Inc.</Para>

                                        {/* company description */}
                                        <Para fontClass={Backgroundcss.body_font}>
                                            My first job right out of college. I worked with a small team of designers 
                                            and developers, where I built and published websites for the company's corporate 
                                            clients; such as Honeywell and TOny Elumelu Foundation.
                                        </Para>

                                        {/* company role */}
                                        <Para fontClass={Backgroundcss.role_header}>
                                            In this role I achieved the following:
                                        </Para>
                                        <li>
                                            Liaised with clients and created web designs according to clients specification.
                                        </li>

                                        <li>
                                            Strengthened company brand by developing images and content to capture visitor interest.
                                        </li>

                                        <li>
                                            Upgraded site by updating content and graphics and monitored performance and results.
                                        </li>
                                        
                                        
                                        <li>
                                            Maintained and updated website with database of properties for company. Upgraded site by updating content 
                                            and graphics and monitored performance and results.
                                        </li>
                                
                                </div>

                            </div>
                                
                    </div>

                </section>

                {/* EDUCATION */}
                <section className={Backgroundcss.education}>

                    {/* header */}
                    <div className={Backgroundcss.header}>
                        <Five fontClass={Backgroundcss.header_font}>EDUCATION</Five>
                    </div>

                    {/* body */}
                    <div className={Backgroundcss.body_item}>

                        <div className={Backgroundcss.body}>

                            <div className={Backgroundcss.work_header}>
                                    
                                {/* main header */}
                                <Fur fontClass={Backgroundcss.work_title}>BSC Computer Science</Fur>

                            </div>

                            <div className={Backgroundcss.others}>

                                {/* company header*/}
                                <Para fontClass={Backgroundcss.company_title}>Second Class (Upper Division)</Para>

                                {/* company description */}
                                <Para fontClass={Backgroundcss.body_font}>
                                    Babcock University, Illishan-Remo, Ogun State, Nigeria
                                </Para>

                                {/* date */}
                                <Para fontClass={Backgroundcss.work_date}>
                                    SEP 2010 - JUN 2014
                                </Para>                    

                            </div>

                        </div>

                        <div className={Backgroundcss.body}>

                            <div className={Backgroundcss.work_header}>
                                    
                                {/* main header */}
                                <Fur fontClass={Backgroundcss.work_title}>High School Diploma</Fur>
    
                            </div>

                            <div className={Backgroundcss.others}>
            
                                    {/* company header*/}
                                    <Para fontClass={Backgroundcss.company_title}>WAEC Certification</Para>
            
                                    {/* company description */}
                                    <Para fontClass={Backgroundcss.body_font}>
                                        Christ The King Catholic College, Odolewu-Ijebu, Ogun State, Nigeria.
                                    </Para>
            
                                    {/* date */}
                                    <Para fontClass={Backgroundcss.work_date}>
                                        SEP 2003 - JUN 2009
                                    </Para>                    
                                
                            </div>

                        </div>

                    </div>

                </section>

                {/* CERTIFICATION */}
                <section className={Backgroundcss.certification}>

                    {/* header */}
                    <div className={Backgroundcss.header}>
                        <Five fontClass={Backgroundcss.header_font}>CERTIFICATIONS</Five>
                    </div>

                    {/* body */}
                    <div className={Backgroundcss.body_item}>

                        <div className={Backgroundcss.body}>

                            <img src="" alt="certification icon" />

                        </div>

                        <div className={`${Backgroundcss.body} ${Backgroundcss.body2}`}>

                            <div className={Backgroundcss.work_header}>
                                    
                                {/* main header */}
                                <Fur fontClass={Backgroundcss.work_title}>Gestalt Psychology</Fur>

                            </div>

                            <div className={Backgroundcss.others}>

                                    {/* company header*/}
                                    <Para fontClass={Backgroundcss.company_title}>Interaction Design Foundation (Online)</Para>

                                    {/* company description */}
                                    <Para fontClass={Backgroundcss.body_font}>
                                        Member
                                    </Para>

                                    {/* date */}
                                    <Para fontClass={Backgroundcss.work_date}>
                                        SEP 2010 - JUN 2014
                                    </Para>                    

                            </div>

                        </div>

                                
                    </div>

                </section>

            </div>
            
        </div>

    )
}

export default Background;

