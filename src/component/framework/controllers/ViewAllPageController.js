import React from 'react'
import Header from '../../pages/adminpages/viewallcomponent/header'
import Navigation from '../../pages/adminpages/viewallcomponent/navigation'
import Table from '../../pages/adminpages/viewallcomponent/table'
import {Admin} from '../../pages/adminpages'

function getViewAllHeader(decision){
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Header title={"Projects"} description={"View all projects"} />;
            case 'article' : return <Header title={"Articles"} description={"View all articles"} />;
            default : return <Admin/>;
        }
}

function getViewAllTable(decision){
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Table />;
            case 'article' : return <Table />;
            default : return <Admin/>;
        }
}

function getViewAllNavigation(decision){
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Navigation />;
            case 'article' : return <Navigation />;
            default : return <Admin/>;
        }
}

const ViewallPageController = {
    getViewAllHeader,
    getViewAllTable,
    getViewAllNavigation
}

export default ViewallPageController;