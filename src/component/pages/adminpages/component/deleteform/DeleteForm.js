import React from 'react';
import DeleteFormCss from './DeleteForm.module.css';
import {Three,Para,Alpha} from '../../../../reusable/fonts';
import pageurl from '../../../../framework/url/pageurl';

const DeleteForm = ({projectObject,delete_content,delete_button_text,name_label,description_label,...props}) => {
    
    return(
        
        <div className={DeleteFormCss.delete_Section}>

            <div className={DeleteFormCss.delete_properties}>

                <div className={DeleteFormCss.img_container}>
                    <img src={projectObject.imageurl} alt="" />
                </div>
                                        
                <div className={DeleteFormCss.other_details}>
                
                    <span>
                        <Para fontClass={DeleteFormCss.para}>{name_label}&nbsp;</Para>
                        <Para fontClass={DeleteFormCss.three}>{projectObject.title}</Para>
                    </span>
                
                    <span>
                        <Para fontClass={DeleteFormCss.para}>{description_label}&nbsp;</Para>
                        <Para fontClass={DeleteFormCss.three}>{projectObject.description}</Para>
                    </span>
                                            
                </div>

            </div>

            <div className={DeleteFormCss.header}>
                <Three fontClass={DeleteFormCss.three}>
                    Are you sure you want to delete project ?
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

export default DeleteForm;