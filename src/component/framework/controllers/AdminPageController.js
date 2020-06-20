import React from 'react';
import {Admin,UploadPage,ViewAllPage,DecisionPage,UpdatePage,DeletePage} from '../../pages/adminpages'


function setPage(page,action,decision){
    window.localStorage.setItem('admin',JSON.stringify({'pageType':page,"pageAction": action,
                                                        "pageDecision" : decision}))
}

function getPageInfo(){
    return JSON.parse(window.localStorage.getItem('admin'));
}

function getPage(){

    let page = "";

    if(window.localStorage.getItem('admin')){
        
        page = JSON.parse(window.localStorage.getItem('admin'));
        
        switch(page.pageAction){
            case '' : return <Admin />;
            case 'add' : return <UploadPage />;
            case 'viewall' : return <ViewAllPage />;
            case 'decision' : return <DecisionPage />;
            default : return <Admin/>;
        }

    }

}


function resetPage(){
    window.localStorage.removeItem('admin');
}

const AdminPageController = {
    setPage,
    getPage,
    resetPage,
    getPageInfo
}

export default AdminPageController;