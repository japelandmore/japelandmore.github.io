import React from 'react';
import AdminCss from './Admin.module.css';
import {One,Para} from '../../../reusable/fonts'
import { withRouter } from 'react-router-dom'
import AdminComponent from './AdminComponent';
import pageurl from '../../../framework/url/pageurl'

const Admin = ({...props}) => {

    function handlePage(pageAction,pageDecision){
        props.history.push(pageurl.ADMIN_URL,{pageAction:pageAction,pageDecision:pageDecision});
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
                    <AdminComponent title={"Project"}  
                                    buttonText1={"Add Project"} 
                                    buttonText2={"View All Projects"} 
                                    handlePage1={()=>{handlePage('add','project')}} 
                                    handlePage2={()=>{handlePage('viewall','project')}}
                                    />
                    
                    {/* ARTICLE */}
                    <AdminComponent title={"Article"}  
                                    buttonText1={"Add Article"} 
                                    buttonText2={"View All Articles"} 
                                    handlePage1={()=>{handlePage('add','article')}} 
                                    handlePage2={()=>{handlePage('viewall','article')}} 
                                    />
                    
                </div>

            </div>

        </div>
    )
}

export default withRouter(Admin);