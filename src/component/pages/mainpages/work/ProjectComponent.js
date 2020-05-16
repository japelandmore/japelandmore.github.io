import React from 'react';
import {Alpha,Five,Para} from '../../../reusable/fonts'
import readmore from '../../../assets/image/icons/icon.svg';
import readless from '../../../assets/image/icons/show-less-fold-button.svg';


const ProjectComponent = ({WorkCss,img,project,project_type,company,year,project_link,image_description,showComponent,...props}) => {
    
    const [userRead,setUserRead] = React.useState(false);

                return(

                        <div className={`${WorkCss.body} ${WorkCss.project_component} ${!showComponent ? WorkCss.hide_project_component : null}`} >
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container}>

                                    <img src={img} alt={image_description} />

                                </div>

                                <div className={WorkCss.second_section}>

                                    <div className={WorkCss.others_mobile}>
                                
                                        <div className={WorkCss.others} style={{height:userRead ? "auto" : "220px" }}>

                                            <div className={WorkCss.body_header}>
                                            
                                                <div className={WorkCss.header_title}>
                                                
                                                    <Five fontClass={WorkCss.header_font}>{project}</Five>
                                                
                                                    <Para fontClass={WorkCss.header_project} >{project_type}</Para>
                                                
                                                </div>

                                                <div className={WorkCss.header_description}>
                                                
                                                    <Para fontClass={WorkCss.header_company}>{company}</Para>
                                                
                                                    <Para fontClass={WorkCss.header_year}>{year}</Para>
                                                
                                                </div>
                                            
                                            </div>

                                            <div className={WorkCss.body_body}>
                                                
                                                {props.children}                   

                                            </div>

                                        </div>
                                    
                                    </div>

                                    <div className={WorkCss.others_no_mobile}>
                                
                                        <div className={WorkCss.others} >

                                            <div className={WorkCss.body_header}>
                                            
                                                <div className={WorkCss.header_title}>
                                                
                                                    <Five fontClass={WorkCss.header_font}>{project}</Five>
                                                
                                                    <Para fontClass={WorkCss.header_project}>{project_type}</Para>
                                                
                                                </div>

                                                <div className={WorkCss.header_description}>
                                                
                                                    <Para fontClass={WorkCss.header_company}>{company}</Para>
                                                
                                                    <Para fontClass={WorkCss.header_year}>{year}</Para>
                                                
                                                </div>
                                            
                                            </div>

                                            <div className={WorkCss.body_body}>
                                                
                                                {props.children}                   

                                            </div>

                                        </div>
                                    
                                    </div>

                                    

                                    <div className={WorkCss.body_body_more}>

                                        <div className={WorkCss.read_command} style={{display: userRead ? "none" : "flex"}}>

                                            <div className={WorkCss.image_container} onClick={()=>{setUserRead(true)}}>
                                            
                                                <img src ={readmore} alt="read more"></img>    
                                            
                                            </div>

                                            <Para fontClass={WorkCss.para}>Read More</Para>
                                        </div>
                                        
                                        <div className={WorkCss.read_command} style={{display: userRead ? "flex" : "none"}}>
                                            
                                            <div className={WorkCss.image_container} onClick={()=>{setUserRead(false)}}>

                                                <img src ={readless} alt="read less"></img>    

                                            </div>
                                            <Para fontClass={WorkCss.para}>Read Less</Para>
                                        </div>                                
                                    
                                    </div>
                                    
                                    <Alpha ahref={project_link} fontClass={WorkCss.project_link_style}>
                                            <button className={WorkCss.hire_btn}>View Project</button>
                                    </Alpha>

                                </div>
                        </div>
                )
};


export default ProjectComponent;