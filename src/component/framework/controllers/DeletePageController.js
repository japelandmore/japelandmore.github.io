import React from 'react';
import {Admin} from '../../pages/adminpages'
import {Header,Image,Title,Description,DeleteAction} from '../../pages/adminpages/deletecomponent'


// const data = useSelector(state => state.storeContent);

function getDeleteHeader(decision){    
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Header headerTitle={"Delete Project"} />;
            case 'article' : return <Header headerTitle={"Delete Article"} />;
            default : return <Admin/>;
        }
    
}

function getDeleteImage(decision,data){
    
    switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Image imageurl={data.imageurl} />;
            case 'article' : return <Image imageurl={data.imageurl} />;
            default : return <Admin/>;
    }
    
}

function getDeleteTitle(decision,data){
    
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Title name_label="PROJECT TITLE : " title={data.title} />;
            case 'article' : return <Title name_label="ARTICLE TITLE : " title={data.title} />;
            default : return <Admin/>;
        }
    
}

function getDeleteDescription(decision,data){
    
    switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Description description_label="PROJECT DESCRIPTION" 
                                                 description={data.description} />;
            case 'article' : return <Description description_label="ARTICLE DESCRIPTION" 
                                                 description={data.description} />;
            default : return <Admin/>;
        }
    
}

function getDeleteAction(decision,data){
    
    switch(decision){
            case '' : return <Admin />;
            case 'project' : return <DeleteAction   url={"projects"} data={data}
                                                    warning_message="Are you sure you want to delete project ?" 
                                                    delete_button_text="DELETE PROJECT" />;

            case 'article' : return <DeleteAction   url={"articles"} data={data}
                                                    warning_message="Are you sure you want to delete article" 
                                                    delete_button_text="DELETE ARTICLE" />;

            default : return <Admin/>;
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