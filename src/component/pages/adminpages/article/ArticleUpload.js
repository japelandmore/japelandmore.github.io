import React from 'react';
import ArticleUploadCss from './ArticleUpload.module.css';
import UploadController from '../../../framework/controllers/UploadController';
import Status from '../component/status'
import pageurl from '../../../framework/url/pageurl';
import {One,Six} from '../../../reusable/fonts';
import {withRouter} from 'react-router-dom'
import ArticleForm from '../component/articleform'
import ImageUploadForm from '../component/imageform';

const ArticleUpload = () => {

    var d = new Date();

    const [articleObject, setArticleObject] = React.useState({
        id: Math.floor(Date.now() / 1000),
        title : "",
        description : "",
        release_month : "",
        release_year : "",
        article_link : "",
        imageurl : "",
        pass : "",
        date_created : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`,
        last_modified : `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    });

    const [articleObjectError, setArticleObjectError] = React.useState({
        titleError : "",
        descriptionError : "",
        release_monthError : "",
        release_yearError : "",
        dateError : "",
        article_linkError : "",
    });

    const [imageUpload, setImageUpload] = React.useState({
        image_upload : null
    })

    const[userDetails,setUserDetails] = React.useState({
        emailVerified : ""
    });

    const [uploadButton, setUploadButton] = React.useState(false)

    const [firstFormValidated,setFirstFormValidated] = React.useState(false);

    const [secondFormValidated,setSecondFormValidated] = React.useState(false);

    const [articleStatus,setArticleStatus] = React.useState(false);

    const [articleUploaded,setArticleUploaded] = React.useState(false);

    const [uploadProgress,setUploadProgress] = React.useState({
        progress : 0
    })

    function handleSubmit(e) {
       
        if(!firstFormValidated){
            const fileType = "articles";
            UploadController.handleForm(articleObject,fileType,articleObjectError,setArticleObjectError,setFirstFormValidated);
        }else{
            const url = 'articles';
            UploadController.handleUpload(url,imageUpload,articleObject,setArticleObject,setSecondFormValidated,setUploadProgress);
        }

    }

    function handleFormSubmit(){
        const url = 'articles';
        UploadController.uploadData(url,articleObject,setArticleStatus,setArticleUploaded,setUserDetails);
    }

    // handle onchange input event for updating projectObject
    function handleInput(e){
        setArticleObject({...articleObject,[e.target.name]:e.target.value});
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

    return (

        <div className={ArticleUploadCss.articleupload}>
            { articleStatus && <Status status={articleUploaded} 
                                        success={'Article Saved Successfully'} 
                                        failure={'Article Not Saved'} 
                                        land={pageurl.ADMIN_URL} 
                                        try_again={pageurl.ARTICLE_POST_URL} 
                                        new_action={pageurl.ARTICLE_POST_URL} 
                                        verifiedUser={userDetails.emailVerified} 
                                        buttonText={"Add New Article"} 
                                        bottomAction={"Back to Home Page"}/> }


            <div className={ArticleUploadCss.container}>

                <div className={ArticleUploadCss.header}>

                    <One fontClass={ArticleUploadCss.one}>
                        Add Article
                    </One>
                    
                        {
                            !firstFormValidated ?  
                                <Six fontClass={ArticleUploadCss.six}>
                                    Complete the form below then click the
                                    <span style={{color:"#fff",fontFamily:"encode_sans_medium"}}>
                                        &nbsp;&nbsp;' Continue Button '
                                    </span>.
                                </Six>

                            :
                                !secondFormValidated &&
                                    <Six fontClass={ArticleUploadCss.six}>
                                        Upload preferred image then click the
                                        <span style={{color:"#fff",fontFamily:"encode_sans_medium"}}>
                                            &nbsp;&nbsp;'Upload Button '
                                        </span>.
                                    </Six>

                        }

                </div>

            </div>

            <div className={ArticleUploadCss.container}>
            {!firstFormValidated ?

                <ArticleForm handleInput={handleInput} handleSubmit={handleSubmit}
                    articleObject={articleObject} articleObjectError={articleObjectError} />
            :
                <ImageUploadForm object={articleObject} handleUpload={handleUpload} 
                    secondFormValidated={secondFormValidated}
                    setFirstFormValidated={setFirstFormValidated} handleSubmit={handleSubmit} 
                    handleFormSubmit={handleFormSubmit} uploadButton={uploadButton}
                    progressbar={uploadProgress} previousPageColor={"#fff"} />

            }

            </div>

        </div>
    )

}


export default withRouter(ArticleUpload);