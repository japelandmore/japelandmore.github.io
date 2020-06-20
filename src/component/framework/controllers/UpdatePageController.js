import React from 'react';
import Header from '../../pages/adminpages/uploadcomponent/header'
import {ProjectForm,ArticleForm} from '../../pages/adminpages/updatecomponent/form'
import ImageUploadForm from '../../pages/adminpages/updatecomponent/imageupload'
import Submit from '../../pages/adminpages/updatecomponent/submit'
import {Admin} from '../../pages/adminpages'


function getUpdateHeader(){    
    
    let page = "";
    if(window.localStorage.getItem('admin')){
        page = JSON.parse(window.localStorage.getItem('admin'));
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <Header headerTitle={"Edit Project"} />;
            case 'article' : return <Header headerTitle={"Edit Article"} />;
            default : return <Admin/>;
        }
    }else{
        return <Admin/>        
    }
}

function getUpdateForm(){
    
    let page = "";

    if(window.localStorage.getItem('admin')){
        
        page = JSON.parse(window.localStorage.getItem('admin'));
        
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <ProjectForm />;
            case 'article' : return <ArticleForm />;
            default : return <Admin/>;
        }

    }else{
        return <Admin/>        
    }
}

function getUpdateImageForm(){
    
    let page = "";

    if(window.localStorage.getItem('admin')){
        
        page = JSON.parse(window.localStorage.getItem('admin'));
        
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <ImageUploadForm />;
            case 'article' : return <ImageUploadForm />;
            default : return <Admin/>;
        }

    }else{
        return <Admin/>        
    }

}

function getSubmit(){
    
    let page = "";

    if(window.localStorage.getItem('admin')){
        
        page = JSON.parse(window.localStorage.getItem('admin'));
        
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <Submit buttontext1={"Update Project"} buttontext2={"Preview"} />;
            case 'article' : return <Submit buttontext1={"Update Article"} buttontext2={"Preview"} />;
            default : return <Admin/>;
        }

    }else{
        return <Admin/>        
    }

}

const UpdatePageController = {
    getUpdateHeader,
    getUpdateForm,
    getUpdateImageForm,
    getSubmit
}

export default UpdatePageController;