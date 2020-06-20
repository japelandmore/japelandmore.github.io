import React from 'react'
import {Three,Alpha} from '../../../../reusable/fonts'
import pageurl from '../../../../framework/url/pageurl'
import DeleteFormCss from '../DeleteForm.module.css'

const DeleteAction = ({delete_content,delete_button_text,warning_message}) => {
    return (
        <div className={DeleteFormCss.delete_Section}>
            <div className={DeleteFormCss.header}>
                <Three fontClass={DeleteFormCss.three}>
                    {warning_message}
                </Three>
            </div>
            
            <div className={DeleteFormCss.body}>
                
                <button onClick={delete_content}>{delete_button_text}</button>

                <Alpha ahref={pageurl.ADMIN_URL}>
                    <button>Exit</button>
                </Alpha>

            </div>
        </div>
    )
}

export default DeleteAction;