import React from 'react';
import Header from '../../pages/adminpages/component/updatecomponent/header'
import {ProjectForm,ArticleForm,TestimonialForm} from '../../pages/adminpages/component/updatecomponent/form'
import ImageUploadForm from '../../pages/adminpages/component/updatecomponent/imageupload'
import Submit from '../../pages/adminpages/component/updatecomponent/submit'
import {Admin} from '../../pages/adminpages'

function getUpdateHeader(decision){    
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Header headerTitle={"Edit Project"} />;
            case 'article' : return <Header headerTitle={"Edit Article"} />;
            case 'testimony' : return <Header headerTitle={"Edit Testimony"} />;
            default : return <Admin/>;
        }

}

function getUpdateForm(decision, data){
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <ProjectForm data={data} />;
            case 'article' : return <ArticleForm data={data} />;
            case 'testimony' : return <TestimonialForm data={data} />;
            default : return <Admin/>;
        }

}

function getUpdateImageForm(decision,data){
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <ImageUploadForm url={"projects"} imageurl={data.imageurl} id={data.id} />;
            case 'article' : return <ImageUploadForm url={"articles"} imageurl={data.imageurl} id={data.id} />;
            case 'testimony' : return <ImageUploadForm url={"testimonies"} imageurl={data.imageurl} id={data.id} />;
            default : return <Admin/>;
        }

}

function getSubmit(decision){
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Submit url={"projects"} buttontext1={"Update Project"} buttontext2={"Preview"} />;
            case 'article' : return <Submit url={"articles"} buttontext1={"Update Article"} buttontext2={"Preview"} />;
            case 'testimony' : return <Submit url={"testimonies"} buttontext1={"Update Testimony"} buttontext2={"Preview"} />;
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