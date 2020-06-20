import React from 'react'
import {Three,Alpha} from '../../../../reusable/fonts'
import pageurl from '../../../../framework/url/pageurl'
import DeleteFormCss from '../DeleteForm.module.css'
import UpdateController from '../../../../framework/controllers/UpdateController'


const DeleteAction = ({url,data,delete_button_text,warning_message}) => {


    function handleDelete(){
        UpdateController.deleteData(url,data);
    }

    return (
        <div className={DeleteFormCss.delete_Section}>
            <div className={DeleteFormCss.header}>
                <Three fontClass={DeleteFormCss.three}>
                    {warning_message}
                </Three>
            </div>
            
            <div className={DeleteFormCss.body}>
                
                <button onClick={()=>{handleDelete()}}>{delete_button_text}</button>

                <Alpha ahref={pageurl.ADMIN_URL}>
                    <button>Exit</button>
                </Alpha>

            </div>
        </div>
    )
}

export default DeleteAction;