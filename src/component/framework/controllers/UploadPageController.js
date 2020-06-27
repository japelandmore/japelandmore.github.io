import React from 'react';
import Header from '../../pages/adminpages/component/uploadcomponent/header'
import {ProjectForm,ArticleForm,TestimonialForm} from '../../pages/adminpages/component/uploadcomponent/form'
import ImageUploadForm from '../../pages/adminpages/component/uploadcomponent/imageupload'
import Submit from '../../pages/adminpages/component/uploadcomponent/submit'
import {Admin} from '../../pages/adminpages'


function getUploadHeader(decision){    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Header headerTitle={"Add Project"} />;
            case 'article' : return <Header headerTitle={"Add Article"} />;
            case 'testimony' : return <Header headerTitle={"Add Testimony"} />;
            default : return <Admin/>;
        }
}

function getUploadForm(decision){
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <ProjectForm />;
            case 'article' : return <ArticleForm />;
            case 'testimony' : return <TestimonialForm />;
            default : return <Admin/>;
        }

}

function getUploadImageForm(decision){
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <ImageUploadForm url={"projects"}/>;
            case 'article' : return <ImageUploadForm url={"articles"} />;
            case 'testimony' : return <ImageUploadForm url={"testimonies"} />;
            default : return <Admin/>;
        }

}

function getSubmit(decision){

    switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Submit url={"projects"} buttontext1={"Upload Project"} buttontext2={"Preview"} />;
            case 'article' : return <Submit url={"articles"} buttontext1={"Upload Article"} buttontext2={"Preview"} />;
            case 'testimony' : return <Submit url={"testimonies"} buttontext1={"Upload Testimony"} buttontext2={"Preview"} />;
            default : return <Admin/>;
    }

}

const UploadPageController = {
    getUploadHeader,
    getUploadForm,
    getUploadImageForm,
    getSubmit
}

export default UploadPageController;