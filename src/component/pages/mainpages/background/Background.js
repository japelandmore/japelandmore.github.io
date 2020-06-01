import React from 'react';
import Backgroundcss from './Background.module.css';
import {One as HeaderFont,Three as Fur,Five,Para,Six} from '../../../reusable/fonts'
import userresearch from '../../../assets/image/background/user Research.svg';
import interfacedesign from '../../../assets/image/background/interface design.svg';
import webdesign from '../../../assets/image/background/Web design.svg';
import usabilityimg from '../../../assets/image/background/Gameboy 1.svg';
import printer from '../../../assets/image/background/2561375-printer.svg';
import WorkExperienceComponent from './WorkExperienceComponent';
import CompanyDescription from './CompanyDescription';
import AreaOfExpertise from './AreaOfExpertise';
import WorkExperienceRolePoints from './WorkExperienceRolePoints';
import AreaOfExpertiseRolePoints from './AreaOfExpertiseRolePoints';
import cv from '../../../assets/document/pdf/Portfolio (Abdulateef Jeffery).pdf';
import medal from '../../../assets/image/icons/medal.svg';

const Background = () => {

    return(

        <div className={Backgroundcss.background}>
            
            <a href={cv} target="_blank" rel="noopener noreferrer" download >
                <div className={Backgroundcss.printer_section}>
        
                    <div className={Backgroundcss.image_container}>
                        <img src={printer} alt="printer icon" />
                    </div>

                </div>
            </a>

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
                            <AreaOfExpertise Backgroundcss={Backgroundcss}
                                imageicon={userresearch}
                                imagealt={"user research icon"}
                                header={"User Research"}>
                                    {AreaOfExpertiseRolePoints.UserResearch()}
                            </AreaOfExpertise>
                            
                            {/* body */}
                            <AreaOfExpertise Backgroundcss={Backgroundcss}
                                imageicon={interfacedesign}
                                imagealt={"interface design icon"}
                                header={"Interface Design"}>
                                    {AreaOfExpertiseRolePoints.InterfaceDesign()}
                            </AreaOfExpertise>
                            
                            {/* body */}
                            <AreaOfExpertise Backgroundcss={Backgroundcss}
                                imageicon={webdesign}
                                imagealt={"web design icon"}
                                header={"Web Design"}>
                                    {AreaOfExpertiseRolePoints.WebDesign()}
                            </AreaOfExpertise>

                            {/* body */}
                            <AreaOfExpertise Backgroundcss={Backgroundcss}
                                imageicon={usabilityimg}
                                imagealt={"usability testing icon"}
                                header={"Usability Testing"}>
                                    {AreaOfExpertiseRolePoints.UsabilityTesting()}
                            </AreaOfExpertise>

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
                            <WorkExperienceComponent Backgroundcss={Backgroundcss} 
                                title={"Business Analyst (UI/UX Designer)"}
                                workdate={"JAN 2018 - PRESENT"}
                                companytitle={"Flexip Group Technologies & Solutions"}
                                companydescription={CompanyDescription.Business_analyst()}
                                roleheader={"In this role I equally work as a UX Designer to:"}>
                                    {WorkExperienceRolePoints.BusinessAnalystRoles()}
                            </WorkExperienceComponent>
                            
                            {/* UI/UX Developer */}
                            <WorkExperienceComponent Backgroundcss={Backgroundcss} 
                                title={"UI/UX Developer"}
                                workdate={"AUG 2018 - DEC 2018"}
                                companytitle={"Groove Platforms"}
                                companydescription={CompanyDescription.Uidev()}
                                roleheader={"In this role I achieved the following:"}>
                                    {WorkExperienceRolePoints.UIUX()}
                            </WorkExperienceComponent>
                            
                            {/* UI/UX Developer 2 */}
                            <WorkExperienceComponent Backgroundcss={Backgroundcss} 
                                title={"UI/UX Developer"}
                                workdate={"AUG 2018 - DEC 2018"}
                                companytitle={"MCOMM Solutions & Services"}
                                companydescription={CompanyDescription.Uidev2()}
                                roleheader={"In this role I:"}>
                                    {WorkExperienceRolePoints.UIIX2()}
                            </WorkExperienceComponent>
                            
                            {/* Web Developer */}
                            <WorkExperienceComponent Backgroundcss={Backgroundcss} 
                                title={"Web Developer"}
                                workdate={"JUL 2014 - SEP 2015"}
                                companytitle={"Antigravity Inc."}
                                companydescription={CompanyDescription.Webdev()}
                                roleheader={"In this role I achieved the following:"}>
                                    {WorkExperienceRolePoints.WebDev()}            
                            </WorkExperienceComponent>
    
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
                                <Six fontClass={Backgroundcss.work_date}>
                                    SEP 2010 - JUN 2014
                                </Six>                    

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
                                    <Six fontClass={Backgroundcss.work_date}>
                                        SEP 2003 - JUN 2009
                                    </Six>                    
                                
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

                            <img src={medal} alt="certification icon" />

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
                                    <Six fontClass={Backgroundcss.work_date}>
                                        SEP 2010 - JUN 2014
                                    </Six>                    

                            </div>

                        </div>

                                
                    </div>

                </section>

            </div>
            
        </div>

    )
}

export default Background;

