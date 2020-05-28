import React from 'react';
import ProjectFormCss from './ProjectForm.module.css';
import {Para} from '../../../../reusable/fonts'

const ProjectForm = ({handleInput,projectObject,projectObjectError,handleSubmit,inputstyle,selectstyle,textstyle,buttonstyle}) => {

    return(

        <div className={ProjectFormCss.projectform}>

                <div className={ProjectFormCss.form}>
                    
                    {/* image name */}
                    <input type="text" placeholder="project name" name="project_name" required 
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.project_name} style={inputstyle}></input>    
                    {
                        projectObjectError.project_nameError !== "" ? 
                        <Para fontClass={ProjectFormCss.error}>
                            {projectObjectError.project_nameError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    {/* image description */}
                    <input type="text" placeholder="project description" name="image_description" required
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.image_description} style={inputstyle}></input>    
                    {
                        projectObjectError.image_descriptionError !== "" ?
                        <Para fontClass={ProjectFormCss.error}>
                            {projectObjectError.image_descriptionError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    {/* product name */}
                    <input type="text" placeholder="product name" name="project" required 
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.project} style={inputstyle}></input>    
                    {
                        projectObjectError.projectError !== "" ?
                        <Para fontClass={ProjectFormCss.error}>
                            {projectObjectError.projectError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }

                    {/* product category */}
                    <select required
                        onChange={(e)=>handleInput(e)} 
                        value={projectObject.project_category} 
                        name="project_category" style={selectstyle}>
                            <option>Select Option</option>
                            <option>UI-UX Design</option>
                            <option>Branding</option>
                            <option>Web Design</option>
                            <option>Business Analysis</option>
                    </select>
                    {
                        projectObjectError.project_categoryError !== "" ?
                        <Para fontClass={ProjectFormCss.error}>
                            {projectObjectError.project_categoryError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }

                    {/* company name */}
                    <input type="text" placeholder="company name" name="company" required
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.company} style={inputstyle}></input>    
                    {
                        projectObjectError.companyError !== "" ? 
                        <Para fontClass={ProjectFormCss.error}>
                            {projectObjectError.companyError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    {/* project year */}
                    <input type="text" placeholder="project year" name="year" required
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.year} style={inputstyle}></input>    
                    {
                        projectObjectError.yearError !== "" ? 
                        <Para fontClass={ProjectFormCss.error}>
                            {projectObjectError.yearError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    

                    {/* about project */}
                    <textarea placeholder="about project" name="paragraph" required
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.paragraph} style={textstyle}></textarea>
                    {
                        projectObjectError.paragraphError !== "" ?
                        <Para fontClass={ProjectFormCss.error}>
                            {projectObjectError.paragraphError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    <button onClick={(e)=>handleSubmit(e)} style={buttonstyle}>CONTINUE</button>

                </div>

        </div>
        
    )
}

export default ProjectForm;