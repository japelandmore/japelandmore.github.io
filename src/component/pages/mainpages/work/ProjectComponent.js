import React from 'react';
import {Five,Para,Six} from '../../../reusable/fonts'
import readmore from '../../../assets/image/icons/icon.svg';
import readless from '../../../assets/image/icons/show-less-fold-button.svg';
import {loadView} from '../../../../actions'
import {useDispatch} from 'react-redux'


const ProjectComponent = ({WorkCss,img,project,project_type,company,year,project_link,image_description,showComponent,index,...props}) => {
    
    const [userRead,setUserRead] = React.useState(false);

    const dispatch = useDispatch();

    function handleView(){
        dispatch(loadView({view:true,index}))
    }

                return(

                        <div className={`${WorkCss.body} ${WorkCss.project_component} ${!showComponent ? WorkCss.hide_project_component : null}`} >
                                
                                {/* Image container */}
                                <div className={WorkCss.img_container} >

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
                                                
                                                    <Six fontClass={WorkCss.header_year}>{year}</Six>
                                                
                                                </div>
                                            
                                            </div>

                                            {/* <div  className={WorkCss.project_description_header}>
                                                <Para fontClass={WorkCss.para}>PROJECT DESCRIPTION</Para>
                                            </div> */}

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

                                            {/* <div  className={WorkCss.project_description_header}>
                                                <Para fontClass={WorkCss.para}>PROJECT DESCRIPTION</Para>
                                            </div> */}

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
                                    
                                    {/* <Alpha ahref={project_link} fontClass={WorkCss.project_link_style}> */}
                                    <div className={WorkCss.button_container}>
                                        <button className={WorkCss.hire_btn} onClick={()=>{handleView()}}>View Project</button>
                                    {/* </Alpha> */}
                                    </div>
                                </div>
                        </div>
                )
};


export default ProjectComponent;