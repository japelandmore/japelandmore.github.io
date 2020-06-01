import React from 'react';
import ProjectFormCss from './ProjectForm.module.css';
import {Four,Para} from '../../../../reusable/fonts'

const ProjectForm = ({handleInput,projectObject,projectObjectError,handleSubmit,inputstyle,
                      selectstyle,textstyle,buttonstyle,labelColor,...props}) => {

    return(

        <div className={ProjectFormCss.projectform}>

                <div className={ProjectFormCss.form}>
                    
                    {/* name */}
                    <label for="title" style={{color:labelColor}}>Name</label>
                    <input type="text" placeholder="product name" name="title" required 
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.title} style={inputstyle}></input>    
                    {
                        projectObjectError.titleError !== "" ? 
                        <Para fontClass={ProjectFormCss.error}>
                            {projectObjectError.titleError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    {/* description */}
                    <label for="description">Description</label>
                    <input type="text" placeholder="project description" name="description" required
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.description} style={inputstyle}></input>    
                    {
                        projectObjectError.descriptionError !== "" ?
                        <Para fontClass={ProjectFormCss.error}>
                            {projectObjectError.descriptionError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    <label for="category">Category</label>
                    <select required
                        onChange={(e)=>handleInput(e)} 
                        value={projectObject.category} 
                        name="category" style={selectstyle}>
                            <option>Select Option</option>
                            <option>UI-UX Design</option>
                            <option>Branding</option>
                            <option>Web Design</option>
                            <option>Business Analysis</option>
                    </select>
                    {
                        projectObjectError.categoryError !== "" ?
                        <Para fontClass={ProjectFormCss.error}>
                            {projectObjectError.categoryError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }

                    {/* company name */}
                    <label for="company">Company</label>
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
                    <label for="year">Year</label>
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
                    <label for="paragraph">About Project</label>
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

                    {projectObjectError.titleError !== "" && 
                        <Four fontClass={ProjectFormCss.four}>
                            {projectObjectError.titleError}
                        </Four>}

                </div>

        </div>
        
    )
}

export default ProjectForm;