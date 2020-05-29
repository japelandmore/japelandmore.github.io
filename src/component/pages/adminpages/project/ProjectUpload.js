import React from 'react';
import ProjectCss from './ProjectUpload.module.css';
import UploadController from '../../../framework/controllers/UploadController';
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
        title :  "",
        description : "",
        imageurl : "",
        company : "",
        year : "",
        category : "",
        paragraph : "",
        date_created : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`,
        last_modified : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    });

    const [imageUpload, setImageUpload] = React.useState({
        image_upload : null
    })

    const [uploadButton, setUploadButton] = React.useState(false)

    const [projectObjectError, setProjectObjectError] = React.useState({
        titleError :  "",
        descriptionError : "",
        imageurlError : "",
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

    function handleSubmit(e) {
        if(!firstFormValidated){
            UploadController.handleForm(projectObject,setProjectObject,setProjectObjectError,setFirstFormValidated);
        }else{
            const url = 'projects';
            UploadController.handleUpload(url,imageUpload,projectObject,setProjectObject,setSecondFormValidated,setUploadProgress);
        }
    }

    function handleFormSubmit(){
        const url = 'projects';
        UploadController.uploadData(url,projectObject,setProjectStatus,setProjectUploaded);
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
                            new_action={pageurl.PROJECT_POST_URL} buttonText={"Add New Project"} /> }
            
            <div className={ProjectCss.container}>

                <div className={ProjectCss.header}>

                    <One fontClass={ProjectCss.one}>
                        Add Project
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

                <ImageUploadForm object={projectObject} handleUpload={handleUpload} secondFormValidated={secondFormValidated}
                                 setFirstFormValidated={setFirstFormValidated} handleSubmit={handleSubmit} 
                                 handleFormSubmit={handleFormSubmit} uploadButton={uploadButton}
                                 progressbar={uploadProgress} previousPageColor={"#fff"}/>
            
            }

            </div>

        </div>
    
    )

}

export default withRouter(ProjectUpload);