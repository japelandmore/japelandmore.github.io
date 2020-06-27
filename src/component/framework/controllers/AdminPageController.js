import React from 'react';
import {Admin,UploadPage,ViewAllPage,DecisionPage} from '../../pages/adminpages'

function getPage(pageAction){        
        switch(pageAction){
            case '' : return <Admin />;
            case 'add' : return <UploadPage />;
            case 'viewall' : return <ViewAllPage />;
            case 'decision' : return <DecisionPage />;
            default : return <Admin/>;
        }
}

const AdminPageController = {
    getPage,
}

export default AdminPageController;