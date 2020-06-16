import React from 'react'
import Header from '../../pages/adminpages/viewallcomponent/header'
import Navigation from '../../pages/adminpages/viewallcomponent/navigation'
import Table from '../../pages/adminpages/viewallcomponent/table'
import {Admin} from '../../pages/adminpages'

function getViewAllHeader(){
    let page = "";
    if(window.localStorage.getItem('admin')){
        page = JSON.parse(window.localStorage.getItem('admin'));
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <Header title={"Projects"} description={"View all projects"} />;
            case 'article' : return <Header title={"Articles"} description={"View all articles"} />;
            default : return <Admin/>;
        }
    }else{
        return <Admin/>        
    }
}

function getViewAllTable(){
    let page = "";
    if(window.localStorage.getItem('admin')){
        page = JSON.parse(window.localStorage.getItem('admin'));
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <Table />;
            case 'article' : return <Table />;
            default : return <Admin/>;
        }
    }else{
        return <Admin/>        
    }
}

function getViewAllNavigation(){
    let page = "";
    if(window.localStorage.getItem('admin')){
        page = JSON.parse(window.localStorage.getItem('admin'));
        switch(page.pageType){
            case '' : return <Admin />;
            case 'project' : return <Navigation />;
            case 'article' : return <Navigation />;
            default : return <Admin/>;
        }
    }else{
        return <Admin/>        
    }
}

const ViewallPageController = {
    getViewAllHeader,
    getViewAllTable,
    getViewAllNavigation
}

export default ViewallPageController;