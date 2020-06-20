import React from 'react'
import {Two,Alpha} from '../../../../reusable/fonts'
import pageurl from '../../../../framework/url/pageurl'
import DeleteFormCss from '../DeleteForm.module.css'
import UpdateController from '../../../../framework/controllers/UpdateController'
import Status from '../../component/status'

const DeleteAction = ({url,data,delete_button_text,warning_message}) => {

    const [deleteStatus,setDeleteStatus] = React.useState(false);
    const [status,setStatus] = React.useState(false);

    function handleDelete(){
        UpdateController.deleteData(url,data,setStatus,setDeleteStatus);
    }

    let content = "";
    switch(url){
        case 'projects' : content = "Project";  break;
        case 'articles' : content = "Article";  break;
        default : break;
    }

    return (
        <>
            {status &&
            <Status status={deleteStatus} 
                            success={`${content} Deleted Successfully`} 
                            failure={`${content} Not Deleted`} 
                            land={pageurl.ADMIN_URL} 
                            try_again={pageurl.ADMIN_URL} 
                            new_action={pageurl.ADMIN_URL} 
                            // verifiedUser={userDetails.emailVerified} 
                            buttonText={`Add New ${content}`} 
                            bottomAction={"Back to Main Menu"}
                            
                            />}


        <div className={DeleteFormCss.delete_Section}>
            <div className={DeleteFormCss.header}>
                <Two fontClass={DeleteFormCss.two}>
                    {warning_message}
                </Two>
            </div>
            
            <div className={DeleteFormCss.body}>
                
                <button onClick={()=>{handleDelete()}} className={DeleteFormCss.delete}>{delete_button_text}</button>

                <Alpha ahref={pageurl.ADMIN_URL}>
                    <button className={DeleteFormCss.exit}>Exit</button>
                </Alpha>

            </div>
        </div>

        </>
    )
}

export default DeleteAction;