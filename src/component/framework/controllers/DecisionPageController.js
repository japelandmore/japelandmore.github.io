import React from 'react'
import {Admin,UpdatePage,DeletePage} from '../../pages/adminpages'


function getUserDecision(decision){
        switch(decision){
            case '' : return <Admin />;
            case 'edit' : return <UpdatePage />;
            case 'delete' : return <DeletePage />;
            default : return <Admin/>;
        }
}

const DecisionPageController = {
    getUserDecision
}

export default DecisionPageController;