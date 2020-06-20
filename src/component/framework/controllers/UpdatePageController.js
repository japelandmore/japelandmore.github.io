import React from 'react';
import Header from '../../pages/adminpages/uploadcomponent/header'
import {ProjectForm,ArticleForm} from '../../pages/adminpages/updatecomponent/form'
import ImageUploadForm from '../../pages/adminpages/updatecomponent/imageupload'
import Submit from '../../pages/adminpages/updatecomponent/submit'
import {Admin} from '../../pages/adminpages'


function getUpdateHeader(decision){    
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Header headerTitle={"Edit Project"} />;
            case 'article' : return <Header headerTitle={"Edit Article"} />;
            default : return <Admin/>;
        }

}

function getUpdateForm(decision, data){
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <ProjectForm data={data} />;
            case 'article' : return <ArticleForm data={data} />;
            default : return <Admin/>;
        }

}

function getUpdateImageForm(decision,data){
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <ImageUploadForm url={"projects"} imageurl={data.imageurl} id={data.id} />;
            case 'article' : return <ImageUploadForm url={"articles"} imageurl={data.imageurl} id={data.id} />;
            default : return <Admin/>;
        }

}

function getSubmit(decision){
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Submit url={"projects"} buttontext1={"Update Project"} buttontext2={"Preview"} />;
            case 'article' : return <Submit url={"articles"} buttontext1={"Update Article"} buttontext2={"Preview"} />;
            default : return <Admin/>;
        }

}

const UpdatePageController = {
    getUpdateHeader,
    getUpdateForm,
    getUpdateImageForm,
    getSubmit
}

export default UpdatePageController;