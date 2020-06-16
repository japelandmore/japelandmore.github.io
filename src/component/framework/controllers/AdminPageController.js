import React from 'react';
import {Admin,UploadPage,UpdatePage} from '../../pages/adminpages'

function setPage(page,action){
    window.localStorage.setItem('admin',JSON.stringify({'pageType':page,"pageAction": action}))
}

function getPage(){

    let page = "";

    if(window.localStorage.getItem('admin')){
        
        page = JSON.parse(window.localStorage.getItem('admin'));
        
        switch(page.pageAction){
            case '' : return <Admin />;
            case 'add' : return <UploadPage />;
            case 'update' : return <UpdatePage />;
            default : return <Admin/>;
        }

    }else{
        return <Admin/>        
    }

}

function resetPage(){
    window.localStorage.removeItem('admin');
}

const AdminPageController = {
    setPage,
    getPage,
    resetPage,
}

export default AdminPageController;