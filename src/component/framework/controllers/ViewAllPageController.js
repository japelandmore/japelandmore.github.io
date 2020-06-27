import React from 'react'
import Header from '../../pages/adminpages/component/viewallcomponent/header'
import Navigation from '../../pages/adminpages/component/viewallcomponent/navigation'
import Table from '../../pages/adminpages/component/viewallcomponent/table'
import {Admin} from '../../pages/adminpages'

function getViewAllHeader(decision){
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Header title={"Projects"} description={"View all projects"} />;
            case 'article' : return <Header title={"Articles"} description={"View all articles"} />;
            case 'testimony' : return <Header title={"Testimonies"} description={"View all testimonies"} />;
            default : return <Admin/>;
        }
}

function getViewAllTable(decision){
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Table />;
            case 'article' : return <Table />;
            case 'testimony' : return <Table />;
            default : return <Admin/>;
        }
}

function getViewAllNavigation(decision){
        switch(decision){
            case '' : return <Admin />;
            case 'project' : return <Navigation />;
            case 'article' : return <Navigation />;
            case 'testimony' : return <Navigation />;
            default : return <Admin/>;
        }
}

const ViewallPageController = {
    getViewAllHeader,
    getViewAllTable,
    getViewAllNavigation
}

export default ViewallPageController;