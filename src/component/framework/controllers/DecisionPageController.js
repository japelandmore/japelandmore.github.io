import React from 'react'
import {Admin,UpdatePage,DeletePage} from '../../pages/adminpages'


function getUserDecision(){
    let page = "";
    if(window.localStorage.getItem('admin')){
        page = JSON.parse(window.localStorage.getItem('admin'));
        switch(page.pageDecision){
            case '' : return <Admin />;
            case 'edit' : return <UpdatePage />;
            case 'delete' : return <DeletePage />;
            default : return <Admin/>;
        }
    }else{
        return <Admin/>        
    }
}

const DecisionPageController = {
    getUserDecision
}

export default DecisionPageController;