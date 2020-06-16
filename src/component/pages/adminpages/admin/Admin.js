import React from 'react';
import AdminCss from './Admin.module.css';
import {One,Para} from '../../../reusable/fonts'
import { withRouter } from 'react-router-dom'
import AdminPageController from '../../../framework/controllers/AdminPageController'
import AdminComponent from './AdminComponent';

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
                        Manage all content 
                    </Para>

                </div>

                <div className={AdminCss.mbody}>
                    
                    {/* PROJECT */}
                    <AdminComponent title={"Project"} pageType={"project"} pageAction1={"add"} pageAction2={"viewall"} 
                                    buttonText1={"Add Project"} buttonText2={"View All Projects"} handlePage={handlePage} />
                    
                    {/* ARTICLE */}
                    <AdminComponent title={"Article"} pageType={"article"} pageAction1={"add"} pageAction2={"viewall"} 
                                    buttonText1={"Add Article"} buttonText2={"View All Articles"} handlePage={handlePage} />
                    
                </div>

            </div>

        </div>
    )
}

export default withRouter(Admin);