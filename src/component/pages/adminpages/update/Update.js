import React from 'react';
import UpdateCss from './Update.module.css'
import {One,Para} from '../../../reusable/fonts';
import UpdateController from '../../../framework/controllers/UpdateController';
import ProjectForm from '../component/projectform';
import ImageUploadForm from '../component/imageform';
import { withRouter } from 'react-router-dom'
import Status from '../component/status';
import pageurl from '../../../framework/url/pageurl';
import DeleteForm from '../component/deleteform';
import ArticleForm from '../component/articleform';

const Update = ({...props}) => {

    var d = new Date();

    const searchmsgRef = React.useRef();

    const action = props.location.state && props.location.state.action ;
    const filetype = props.location.state && props.location.state.page;
    
    const [projectObject, setProjectObject] = React.useState({
        id: "",
        title :  "",
        description : "",
        imageurl : "",
        company : "",
        year : "",
        category : "",
        pass : "",
        paragraph : "",
        date_created : "",
        last_modified : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    });

    const [articleObject, setArticleObject] = React.useState({
        id: "",
        title : "",
        description : "",
        release_month : "",
        release_year : "",
        article_link : "",
        imageurl : "",
        pass : "",
        date_created : "",
        last_modified : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    });

    const [articleObjectError, setArticleObjectError] = React.useState({
        titleError : "",
        descriptionError : "",
        release_monthError : "",
        release_yearError : "",
        dateError : "",
        article_linkError : "",
    })

    const [imageUpload, setImageUpload] = React.useState({
        image_upload : null
    })

    const[userDetails,setUserDetails] = React.useState({
        emailVerified : ""
    });

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

    const updateSectionRef = React.useRef();

    const [projectItemQuery,setProjectItemQuery] = React.useState({
        project_name : "",
        project_category : ""
    });
    const [articleItemQuery,setArticleItemQuery] = React.useState({
        article_title : ""
    });

    const [firstFormValidated,setFirstFormValidated] = React.useState(false);
    const [secondFormValidated,setSecondFormValidated] = React.useState(false);


    const [projectStatus,setProjectStatus] = React.useState(false);
    const [articleStatus,setArticleStatus] = React.useState(false);


    const [projectUploaded,setProjectUploaded] = React.useState(false);
    const [articleUploaded,setArticleUploaded] = React.useState(false);

    const [projectDeleted,setProjectDeleted] = React.useState(false);
    const [articleDeleted,setArticleDeleted] = React.useState(false);

    const [formSection,setFormSection] = React.useState(false);

    const [uploadButton, setUploadButton] = React.useState(false)


    const [uploadProgress,setUploadProgress] = React.useState({
        progress : 0
    })

    function projectQuery(){
        UpdateController.queryDBProject( projectItemQuery,setFormSection,updateSectionRef,setProjectObject,searchmsgRef);
    }

    function articleQuery(){
        UpdateController.queryDBArticle( articleItemQuery,setFormSection,updateSectionRef,setArticleObject,searchmsgRef);
    }

    function handleProjectInput(e){
        setProjectItemQuery({...projectItemQuery,[e.target.name] : e.target.value})
    }

    function handleArticleInput(e){
        setArticleItemQuery({...articleItemQuery,[e.target.name] : e.target.value})
    }

    //handle onchange input event for updating projectObject
    function handleInput(e){
        switch(filetype){
            case 'project' :
                setProjectObject({...projectObject,[e.target.name]:e.target.value});
                break;
            case 'article' :
                setArticleObject({...articleObject,[e.target.name]:e.target.value});
                break;
            default : break;
        }
    }

    function handleSubmit() {
        switch(filetype){
            case 'project' :
                if(!firstFormValidated){
                    UpdateController.handleForm(projectObject,setProjectObject,setProjectObjectError,setFirstFormValidated);
                }else{   
                    const url = 'projects';              
                    UpdateController.handleUpload(url,imageUpload,projectObject,setProjectObject,setSecondFormValidated,setUploadProgress);
                }
                break;
            case 'article' :
                if(!firstFormValidated){
                    UpdateController.handleForm(articleObject,setArticleObject,setArticleObjectError,setFirstFormValidated);
                }else{   
                    const urllela = 'articles';              
                    UpdateController.handleUpload(urllela,imageUpload,articleObject,setArticleObject,setSecondFormValidated,setUploadProgress);
                }
                break;
            default : break;
        }
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

    function handleDelete(){
        switch(filetype){
            case 'project' :
                const url = "projects";
                UpdateController.deleteData(url,projectObject,setProjectStatus,setProjectDeleted,setUserDetails);
                break;
            case 'article' :
                const urllella = "articles";
                UpdateController.deleteData(urllella,articleObject,setArticleStatus,setArticleDeleted,setUserDetails);
                break;
            default : break;
        }
    }

    function handleFormSubmit(){
        switch(filetype){
            case 'project' :
                const url = 'projects';
                UpdateController.uploadData(url,projectObject,setProjectStatus,setProjectUploaded,setUserDetails);
                break;
            case 'article' :
                const urlella = 'articles';
                UpdateController.uploadData(urlella,articleObject,setArticleStatus,setArticleUploaded,setUserDetails);
                break;
            default :
                break;
        }
    }

    return (

        <div className={UpdateCss.update}>

            { filetype==="project" && action==="update" && projectStatus && 
                    <Status status={projectUploaded} 
                            success={'Project Updated Successfully'} 
                            failure={'Project Not Saved'} 
                            land={pageurl.ADMIN_URL} 
                            try_again={pageurl.PROJECT_POST_URL} 
                            new_action={pageurl.PROJECT_POST_URL} 
                            verifiedUser={userDetails.emailVerified} 
                            buttonText={"Add New Project"} 
                            bottomAction={"Back to Main Menu"}/> }

            { filetype==="project" && action==="delete" && projectStatus && 
                    <Status status={projectDeleted} 
                            success={'Project Deleted Successfully'} 
                            failure={'Project Not Deleted'} 
                            land={pageurl.ADMIN_URL} 
                            try_again={pageurl.PROJECT_POST_URL} 
                            new_action={pageurl.PROJECT_POST_URL} 
                            verifiedUser={userDetails.emailVerified} 
                            buttonText={"Add New Project"} 
                            bottomAction={"Back to Main Menu"}/> }
                            

            { filetype==="article" && action==="update" && articleStatus && 
                    <Status status={articleUploaded} 
                            success={'Article Updated Successfully'} 
                            failure={'Article Not Saved'} 
                            land={pageurl.ADMIN_URL} 
                            try_again={pageurl.ARTICLE_POST_URL} 
                            new_action={pageurl.ARTICLE_POST_URL} 
                            verifiedUser={userDetails.emailVerified} 
                            buttonText={"Add New Article"} 
                            bottomAction={"Back to Main Menu"}/> }

            { filetype==="article" && action==="delete" && articleStatus && 
                    <Status status={articleDeleted} 
                            success={'Article Deleted Successfully'} 
                            failure={'Article Not Deleted'} 
                            land={pageurl.ADMIN_URL} 
                            try_again={pageurl.ARTICLE_POST_URL} 
                            new_action={pageurl.ARTICLE_POST_URL} 
                            buttonText={"Add New Article"} 
                            bottomAction={"Back to Main Menu"}/> }
            
            <div className={UpdateCss.container}>

                <div className={UpdateCss.mheader}>
                    
                    { filetype === 'project' && <One fontClass={UpdateCss.one}>Project</One> }
                    { filetype === 'article' && <One fontClass={UpdateCss.one}>Article</One> }
                    { action === 'update' && filetype === 'project' && <Para fontClass={UpdateCss.para}>Update Project</Para> }
                    { action === 'update' && filetype === 'article' && <Para fontClass={UpdateCss.para}>Update Article</Para> }
                    { action === 'delete' && filetype === 'project' && <Para fontClass={UpdateCss.para}>Delete Project</Para> }
                    { action === 'delete' && filetype === 'article' && <Para fontClass={UpdateCss.para}>Delete Article</Para> }
                    
                </div>

                <div className={UpdateCss.mbody}>

                    <div className={UpdateCss.query}>

                        {
                            filetype === 'project' && !formSection &&
                        
                                <div className={UpdateCss.form}>

                                    <label>Name</label>

                                    <input type="text" name="project_name" required 
                                        onChange={(e)=>handleProjectInput(e)} placeholder="product name"
                                        value={projectItemQuery.project_name}></input>
                                    
                                    <label>Category</label>
                                    
                                    <select required
                                    onChange={(e)=>handleProjectInput(e)} 
                                    value={projectItemQuery.project_category} 
                                    name="project_category">
                                        <option>Select Option</option>
                                        <option>UI-UX Design</option>
                                        <option>Branding</option>
                                        <option>Web Design</option>
                                        <option>Business Analysis</option>
                                    </select>

                                    <button onClick={()=>projectQuery()}>Search</button>
                                    
                                    <Para fontClass={UpdateCss.searchmsg} referral={searchmsgRef}>
                                        No Result found
                                    </Para>

                                </div>
                        }

                        {
                            filetype === 'article' && !formSection &&
                        
                                <div className={UpdateCss.form}>    

                                    <label for="article_title">Article Title</label>
                                    <input type="text" name="article_title" required onChange={(e)=>handleArticleInput(e)}
                                        value={articleItemQuery.article_title}></input>

                                    <button onClick={()=>articleQuery()}>Search</button>

                                </div>
                        }

                    </div>

                    <div className={UpdateCss.update_section} ref={updateSectionRef}>

                        { 
                            action === 'update' && filetype === 'project' && formSection &&
                            <div className={UpdateCss.updateformsection}>
                                
                                {!firstFormValidated && filetype === "project" ?
                                    <>
                                        <div className={UpdateCss.formheader}>
                                            <Para fontClass={UpdateCss.paraupdate}>UPDATE PROJECT DETAILS</Para>
                                        </div>

                                        <ProjectForm handleInput={handleInput} projectObject={projectObject} 
                                                    inputstyle={{borderBottom:"1px solid #260590",color:"black"}}
                                                    selectstyle={{border:"0.5px solid #B39BFF"}}
                                                    textstyle={{border:"0.5px solid #B39BFF",color:"black"}}
                                                    buttonstyle={{background:"#260590"}} labelColor={"#260590"}
                                                    projectObjectError={projectObjectError} handleSubmit={handleSubmit} />    

                                        <div className={UpdateCss.formheader} style={{margin:"0 auto",cursor:"pointer"}} 
                                            onClick={()=>setFormSection(false)}>
                                            <Para fontClass={UpdateCss.paraupdate}>Go back</Para>
                                        </div>

                                    </>
                                                :
                                    <>
                                        <div className={UpdateCss.formheader}>
                                            <Para fontClass={UpdateCss.paraupdate}>UPDATE PROJECT IMAGE</Para>
                                        </div>
                                        <ImageUploadForm object={projectObject} handleUpload={handleUpload} 
                                                        secondFormValidated={secondFormValidated} 
                                                        setFirstFormValidated={setFirstFormValidated} 
                                                        inputstyle={{color:"0.5px solid #B39BFF"}}
                                                        buttonstyle={{background:"#260590"}}
                                                        InputExternalStyle={UpdateCss.input}
                                                        handleSubmit={handleSubmit} handleFormSubmit={handleFormSubmit}
                                                        progressbar={uploadProgress} uploadButton={uploadButton} 
                                                        previousPageColor={"#000"}/>
                                    </>
                                }                        
                            </div>
                        }

                        { 
                            action === 'delete' && filetype === 'project' && formSection && 
                            <DeleteForm projectObject={projectObject} delete_button_text={"Delete Project"} 
                                        delete_content={()=>handleDelete()} name_label={"PROJECT NAME :"} 
                                        description_label={"PROJECT DESCRIPTION :"}/>
                        }

                        { 
                            action === 'update' && filetype === 'article' && formSection &&
                            <div className={UpdateCss.updateformsection}>
                                
                                {!firstFormValidated && filetype === "article" ?
                                    <>
                                        <div className={UpdateCss.formheader}>
                                            <Para fontClass={UpdateCss.paraupdate}>UPDATE ARTICLE DETAILS</Para>
                                        </div>

                                        <ArticleForm handleInput={handleInput} articleObject={articleObject} 
                                                    inputstyle={{borderBottom:"1px solid #260590",color:"black"}}
                                                    selectstyle={{border:"0.5px solid #B39BFF"}}
                                                    buttonstyle={{background:"#260590"}} labelColor={"#260590"}
                                                    articleObjectError={articleObjectError} handleSubmit={handleSubmit} />  

                                        <div className={UpdateCss.formheader} style={{margin:"0 auto",cursor:"pointer"}} 
                                            onClick={()=>setFormSection(false)}>
                                            <Para fontClass={UpdateCss.paraupdate}>Go back</Para>
                                        </div>

                                    </>
                                                :
                                    <>
                                        <div className={UpdateCss.formheader}>
                                            <Para fontClass={UpdateCss.paraupdate}>UPDATE PROJECT IMAGE</Para>
                                        </div>
                                        <ImageUploadForm object={articleObject} handleUpload={handleUpload} 
                                                        secondFormValidated={secondFormValidated} 
                                                        setFirstFormValidated={setFirstFormValidated} 
                                                        inputstyle={{color:"0.5px solid #B39BFF"}}
                                                        buttonstyle={{background:"#260590"}}
                                                        InputExternalStyle={UpdateCss.input}
                                                        handleSubmit={handleSubmit} handleFormSubmit={handleFormSubmit}
                                                        progressbar={uploadProgress} uploadButton={uploadButton} 
                                                        previousPageColor={"#000"}/>
                                    </>
                                }                        
                            </div>
                        }

                        { 
                            action === 'delete' && filetype === 'article' && formSection && 
                            
                            <DeleteForm projectObject={articleObject} 
                                        delete_button_text={"Delete Article"} 
                                        delete_content={()=>handleDelete()} 
                                        name_label={"ARTICLE NAME :"} 
                                        description_label={"ARTICLE DESCRIPTION :"} />
                            
                        }

                    </div>

                </div>

            </div>

        </div>

    )
}


export default withRouter(Update);