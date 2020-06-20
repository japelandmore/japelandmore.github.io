import React from 'react';
import Header from '../../pages/adminpages/uploadcomponent/header'
import {ProjectForm,ArticleForm} from '../../pages/adminpages/uploadcomponent/form'
import ImageUploadForm from '../../pages/adminpages/uploadcomponent/imageupload'
import Submit from '../../pages/adminpages/uploadcomponent/submit'
import {Admin} from '../../pages/adminpages'

function getUploadHeader(decision){    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Header headerTitle={"Add Project"} />;
            case 'article' : return <Header headerTitle={"Add Article"} />;
            default : return <Admin/>;
        }
}

function getUploadForm(decision){
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <ProjectForm />;
            case 'article' : return <ArticleForm />;
            default : return <Admin/>;
        }

}

function getUploadImageForm(decision){
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <ImageUploadForm url={"projects"}/>;
            case 'article' : return <ImageUploadForm url={"articles"} />;
            default : return <Admin/>;
        }

}

function getSubmit(decision){

    switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Submit buttontext1={"Upload Project"} buttontext2={"Preview"} />;
            case 'article' : return <Submit buttontext1={"Upload Article"} buttontext2={"Preview"} />;
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