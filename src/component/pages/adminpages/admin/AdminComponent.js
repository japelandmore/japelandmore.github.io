import React from 'react'
import AdminCss from './Admin.module.css';
import {Three,Alpha} from '../../../reusable/fonts'
import pageurl from '../../../framework/url/pageurl'

const AdminComponent = ({title,pageType,pageAction1,pageAction2,buttonText1,buttonText2,handlePage}) => {
    
    return (
        
            <div className={AdminCss.all}>
                        
                        <div className={AdminCss.header}>
                            <Three fontClass={AdminCss.three}>
                                {title}
                            </Three>
                        </div>
                        
                        <div className={AdminCss.body}>
                            
                            <Alpha ahref={pageurl.ADMIN_URL} click={()=>{handlePage(pageType,pageAction1)}}>
                                <button>{buttonText1}</button>
                            </Alpha>
                            
                            <Alpha ahref={pageurl.ADMIN_URL} click={()=>{handlePage(pageType,pageAction2)}}>
                                <button className={AdminCss.btn}>{buttonText2}</button>
                            </Alpha>
                            
                        </div>
                        
                    </div>

    )

}

export default AdminComponent