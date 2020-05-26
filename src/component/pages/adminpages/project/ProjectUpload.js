import React from 'react';
import ProjectCss from './ProjectUpload.module.css';
import ProjectController from '../../../framework/controllers/ProjectController';
import { One,Six,Para } from '../../../reusable/fonts';
import UploadStatus from './UploadStatus'

const ProjectUpload = () =>{

    var d = new Date();
    
    const [projectObject, setProjectObject] = React.useState({
        id: Math.floor(Date.now() / 1000),
        project_name :  "",
        image_description : "",
        imageurl : "",
        project : "",
        company : "",
        year : "",
        project_category : "",
        paragraph : "",
        date_created : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    });

    const [imageUpload, setImageUpload] = React.useState({
        image_upload : null
    })

    const [projectObjectError, setProjectObjectError] = React.useState({
        project_nameError :  "",
        image_descriptionError : "",
        projectError : "",
        companyError : "",
        yearError : "",
        project_categoryError : "",
        paragraphError : "",
        
    })

    // const [imageUploadError, setImageUploadError] = React.useState({
    //     image_uploadError : ""
    // })

    const [firstFormValidated,setFirstFormValidated] = React.useState(false);

    const [secondFormValidated,setSecondFormValidated] = React.useState(false);

    const [projectStatus,setProjectStatus] = React.useState(false);

    const [projectUploaded,setProjectUploaded] = React.useState(false);

    function handleSubmit(e) {
        if(!firstFormValidated){
            ProjectController.handleForm(projectObject,setProjectObject,setProjectObjectError,setFirstFormValidated);
        }else{
            ProjectController.handleUpload(imageUpload,projectObject,setProjectObject,setSecondFormValidated);
        }
    }

    function handleFormSubmit(){
        if(secondFormValidated){
            ProjectController.uploadData(projectObject,setProjectStatus,setProjectUploaded);
        }
    }

    // handle onchange input event for updating projectObject
    function handleInput(e){
        setProjectObject({...projectObject,[e.target.name]:e.target.value});
    }

    // handle image upload to firebase
    function handleUpload(e){
        const image = e.target.files[0];
        setImageUpload({...imageUpload,image_upload:image});
        setSecondFormValidated(false);
    }

    React.useEffect(()=>{
        function get(){
            setTimeout(()=>{
                (!projectObject.project && !projectObject.company && 
                    !projectObject.image_description && !projectObject.paragraph &&
                    !projectObject.project_category && !projectObject.year && !projectObject.project_name) &&
                    ProjectController.readData(setProjectObject);
            },1000);
        }

        get();
    });

    return(
    
        <div className={ProjectCss.projectupload}>

            { projectStatus && <UploadStatus ProjectCss={ProjectCss} projectUploaded={projectUploaded}/> }
            
            <div className={ProjectCss.container}>

                <div className={ProjectCss.header}>

                    <One fontClass={ProjectCss.one}>
                        Add Portfolio Project
                    </One>
                    
                        {
                            !firstFormValidated ?  
                                <Six fontClass={ProjectCss.six}>
                                    Complete the form below then click the
                                    <span style={{color:"#fff",fontFamily:"encode_sans_medium"}}>
                                        &nbsp;&nbsp;' Continue Button '
                                    </span>.
                                </Six>

                            :
                                !secondFormValidated &&
                                    <Six fontClass={ProjectCss.six}>
                                        Upload preferred image then click the
                                        <span style={{color:"#fff",fontFamily:"encode_sans_medium"}}>
                                            &nbsp;&nbsp;'Upload Button '
                                        </span>.
                                    </Six>
                                

                        }

                </div>

            </div>

            <div className={ProjectCss.container}>

            {!firstFormValidated ?

                <div className={ProjectCss.form}>
                    
                    {/* image name */}
                    <input type="text" placeholder="project name" name="project_name" required 
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.project_name}></input>    
                    {
                        projectObjectError.project_nameError !== "" ? 
                        <Para fontClass={ProjectCss.error}>
                            {projectObjectError.project_nameError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    {/* image description */}
                    <input type="text" placeholder="project description" name="image_description" required
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.image_description}></input>    
                    {
                        projectObjectError.image_descriptionError !== "" ?
                        <Para fontClass={ProjectCss.error}>
                            {projectObjectError.image_descriptionError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    {/* product name */}
                    <input type="text" placeholder="product name" name="project" required 
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.project}></input>    
                    {
                        projectObjectError.projectError !== "" ?
                        <Para fontClass={ProjectCss.error}>
                            {projectObjectError.projectError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }

                    {/* product category */}
                    <select required
                        onChange={(e)=>handleInput(e)} 
                        value={projectObject.project_category} 
                        name="project_category">
                            <option>Select Option</option>
                            <option>UI-UX Design</option>
                            <option>Branding</option>
                            <option>Web Design</option>
                            <option>Business Analysis</option>
                    </select>
                    {
                        projectObjectError.project_categoryError !== "" ?
                        <Para fontClass={ProjectCss.error}>
                            {projectObjectError.project_categoryError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }

                    {/* company name */}
                    <input type="text" placeholder="company name" name="company" required
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.company} ></input>    
                    {
                        projectObjectError.companyError !== "" ? 
                        <Para fontClass={ProjectCss.error}>
                            {projectObjectError.companyError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    
                    {/* project year */}
                    <input type="text" placeholder="project year" name="year" required
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.year} ></input>    
                    {
                        projectObjectError.yearError !== "" ? 
                        <Para fontClass={ProjectCss.error}>
                            {projectObjectError.yearError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    

                    {/* about project */}
                    <textarea placeholder="about project" name="paragraph" required
                            onChange={(e)=>handleInput(e)} 
                            value={projectObject.paragraph}></textarea>
                    {
                        projectObjectError.paragraphError !== "" ?
                        <Para fontClass={ProjectCss.error}>
                            {projectObjectError.paragraphError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }
                    <button onClick={(e)=>handleSubmit(e)}>CONTINUE</button>

                </div>    

                :

                <div className={ProjectCss.form}>

                    {/* uploaded image */}
                    {   projectObject.imageurl &&
                            <span className={ProjectCss.image_container}>
                                <img src={projectObject.imageurl} alt={projectObject.image_description}></img>
                            </span>
                    }
                    
                    {/* image upload */} 
                    <input type="file" placeholder="Upload Image" name="image_upload" accept="image/*" required
                            onChange={(e)=>handleUpload(e)}></input>    
                    {
                        projectObject.image_uploadError !== "" ?
                        <Para fontClass={ProjectCss.error}>
                            {projectObject.image_uploadError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }

                    {
                        !secondFormValidated ? 
                            
                            <button onClick={(e)=>handleSubmit(e)}>UPLOAD</button>

                            :

                            <button onClick={(e)=>handleFormSubmit(e)}>SUBMIT</button>
                    
                    }
                    
                    
                    <span style={{display:"block",width:"max-content",margin:"0 auto",padding:"30px 0",fontFamily:"encode_sans",
                                  color:"#fff",textAlign:"center",cursor:"pointer"}} onClick={()=>{setFirstFormValidated(false)}}>
                        Previous Page
                    </span>

                </div>
            
            }

            </div>

        </div>
    
    )

}

export default ProjectUpload;