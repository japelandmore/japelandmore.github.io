import React from 'react';
import ProjectCss from './ProjectUpload.module.css';
import ProjectController from '../../../framework/controllers/ProjectController';
import { One,Six} from '../../../reusable/fonts';
import Status from '../component/status';
import ProjectForm from '../component/projectform';
import ImageUploadForm from '../component/imageform';
import pageurl from '../../../framework/url/pageurl/pageurl';
import {withRouter} from 'react-router-dom'

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

    const [uploadButton, setUploadButton] = React.useState(false)

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

    const [uploadProgress,setUploadProgress] = React.useState({
        progress : 0
    })

    // console.log(uploadProgress);

    function handleSubmit(e) {
       
        if(!firstFormValidated){
            ProjectController.handleForm(projectObject,setProjectObject,setProjectObjectError,setFirstFormValidated);
        }else{
            // if(imageUpload.image_upload){
                ProjectController.handleUpload(imageUpload,projectObject,setProjectObject,setSecondFormValidated,setUploadProgress);
            // }
        }
    }

    function handleFormSubmit(){
        // if(secondFormValidated){
            ProjectController.uploadData(projectObject,setProjectStatus,setProjectUploaded);
        // }
    }

    // handle onchange input event for updating projectObject
    function handleInput(e){
        setProjectObject({...projectObject,[e.target.name]:e.target.value});
    }

    // handle image upload to firebase
    function handleUpload(e){
        try{
            const image = e.target.files[0];
            setImageUpload({...imageUpload,image_upload:image});
            setSecondFormValidated(false);
            if(image.name){
                setUploadButton(true);
            }
        }catch(error){
            console.log(error.message);
        }
    }

    return(
    
        <div className={ProjectCss.projectupload}>

            { projectStatus && <Status status={projectUploaded} 
                            success={'Project Saved Successfully'} failure={'Project Not Saved'} 
                            land={pageurl.ADMIN_URL} try_again={pageurl.PROJECT_POST_URL} 
                            new_project={pageurl.PROJECT_POST_URL} /> }
            
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

                <ProjectForm handleInput={handleInput} projectObject={projectObject} 
                             projectObjectError={projectObjectError} handleSubmit={handleSubmit} />

                :

                <ImageUploadForm projectObject={projectObject} handleUpload={handleUpload} secondFormValidated={secondFormValidated}
                                 setFirstFormValidated={setFirstFormValidated} handleSubmit={handleSubmit} 
                                 handleFormSubmit={handleFormSubmit} uploadButton={uploadButton}
                                 progressbar={uploadProgress}/>
            
            }

            </div>

        </div>
    
    )

}

export default withRouter(ProjectUpload);