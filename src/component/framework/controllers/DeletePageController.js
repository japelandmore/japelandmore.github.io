import React from 'react';
import {Admin} from '../../pages/adminpages'
import {Header,Image,Title,Description,DeleteAction} from '../../pages/adminpages/deletecomponent'


// const data = useSelector(state => state.storeContent);

function getDeleteHeader(){    
    let page = "";
    if(window.localStorage.getItem('admin')){
        page = JSON.parse(window.localStorage.getItem('admin'));
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <Header headerTitle={"Delete Project"} />;
            case 'article' : return <Header headerTitle={"Delete Article"} />;
            default : return <Admin/>;
        }
    }else{
        return <Admin/>        
    }
}

function getDeleteImage(){
    let page = "";
    if(window.localStorage.getItem('admin')){
        page = JSON.parse(window.localStorage.getItem('admin'));
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <Image />;
            case 'article' : return <Header />;
            default : return <Admin/>;
        }
    }else{
        return <Admin/>        
    }
}

function getDeleteTitle(){
    let page = "";
    if(window.localStorage.getItem('admin')){
        page = JSON.parse(window.localStorage.getItem('admin'));
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <Title name_label="PROJECT TITLE : " />;
            case 'article' : return <Title name_label="ARTICLE TITLE : " />;
            default : return <Admin/>;
        }
    }else{
        return <Admin/>        
    }
}

function getDeleteDescription(){
    let page = "";
    if(window.localStorage.getItem('admin')){
        page = JSON.parse(window.localStorage.getItem('admin'));
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <Description description_label="PROJECT DESCRIPTION" />;
            case 'article' : return <Description description_label="ARTICLE DESCRIPTION" />;
            default : return <Admin/>;
        }
    }else{
        return <Admin/>        
    }
}

function getDeleteAction(){
    let page = "";
    if(window.localStorage.getItem('admin')){
        page = JSON.parse(window.localStorage.getItem('admin'));
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <DeleteAction   warning_message="Are you sure you want to delete project ?" 
                                                    delete_content="" 
                                                    delete_button_text="DELETE PROJECT" />;
            case 'article' : return <DeleteAction   warning_message="Are you sure you want to delete article" 
                                                    delete_content="" 
                                                    delete_button_text="DELETE ARTICLE" />;
            default : return <Admin/>;
        }
    }else{
        return <Admin/>        
    }
}

const UpdatePageController = {
    getDeleteHeader,
    getDeleteImage,
    getDeleteTitle,
    getDeleteDescription,
    getDeleteAction
}

export default UpdatePageController;