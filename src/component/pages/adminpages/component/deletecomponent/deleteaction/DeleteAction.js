import React from 'react'
import {Two,Alpha} from '../../../../../reusable/fonts/Font'
import pageurl from '../../../../../framework/url/pageurl/pageurl'
import DeleteFormCss from '../DeleteForm.module.css'
import UpdateController from '../../../../../framework/controllers/UpdateController'
import Status from '../../../status'

const DeleteAction = ({url,data,delete_button_text,warning_message}) => {

    const [deleteStatus,setDeleteStatus] = React.useState(false);
    const [status,setStatus] = React.useState(false);

    function handleDelete(){
        UpdateController.deleteData(url,data,setStatus,setDeleteStatus);
    }

    return (
        <>
            {status &&
            <Status status={deleteStatus} section={"admin"} />}

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