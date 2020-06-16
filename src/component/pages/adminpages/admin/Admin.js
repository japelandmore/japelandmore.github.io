import React from 'react';
import AdminCss from './Admin.module.css';
import {One,Three,Para,Alpha} from '../../../reusable/fonts'
import pageurl from '../../../framework/url/pageurl';
import { withRouter } from 'react-router-dom'
import AdminPageController from '../../../framework/controllers/AdminPageController'

const Admin = ({...props}) => {

    function handlePage(page,action){
        AdminPageController.setPage(page,action)
    }

    return(
        <div className={AdminCss.admin}>

            <div className={AdminCss.container}>

                <div className={AdminCss.mheader}>
                    
                    <One fontClass={AdminCss.one}>
                        Admin Page
                    </One>

                    <Para fontClass={AdminCss.para}>
                        Manage Project and Article content 
                    </Para>

                </div>

                <div className={AdminCss.mbody}>

                    <div className={AdminCss.all}>
                        
                        <div className={AdminCss.header}>
                            <Three fontClass={AdminCss.three}>
                                Project
                            </Three>
                        </div>
                        
                        <div className={AdminCss.body}>
                            
                            <Alpha ahref={pageurl.ADMIN_URL} click={()=>{handlePage('project','add')}}>
                                <button>Add Project</button>
                            </Alpha>
                            
                            <Alpha ahref={pageurl.ADMIN_URL} click={()=>{handlePage('project','update')}}>
                                <button className={AdminCss.btn}>Edit Project</button>
                            </Alpha>
                            
                        </div>
                        
                    </div>

                    <div className={AdminCss.all}>

                        <div className={AdminCss.header}>
                            <Three fontClass={AdminCss.three}>
                                Article
                            </Three>
                        </div>
                        
                        <div className={AdminCss.body}>

                            <Alpha ahref={pageurl.ADMIN_URL} click={()=>{handlePage('article','add')}}>
                                <button>Add Article</button>
                            </Alpha>

                            <Alpha ahref={pageurl.ADMIN_URL} click={()=>{handlePage('article','update')}}>
                                <button className={AdminCss.btn}>Edit Article</button>
                            </Alpha>
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default withRouter(Admin);