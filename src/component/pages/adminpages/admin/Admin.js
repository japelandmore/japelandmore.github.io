import React from 'react';
import AdminCss from './Admin.module.css';
import {One,Three,Para,Alpha} from '../../../reusable/fonts'
import pageurl from '../../../framework/url/pageurl';
import { withRouter } from 'react-router-dom'

const Admin = ({...props}) => {
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

                    <div className={AdminCss.project}>
                        
                        <div className={AdminCss.header}>
                            <Three fontClass={AdminCss.three}>
                                Project
                            </Three>
                        </div>
                        
                        <div className={AdminCss.body}>
                            
                            <Alpha ahref={pageurl.PROJECT_POST_URL}>
                                <button>Add Project</button>
                            </Alpha>
                            
                            {/* <Alpha ahref={pageurl.UPDATE_POST_URL}> */}
                                <button onClick={()=>props.history.push({pathname:pageurl.UPDATE_POST_URL,
                                                                     state:{page:'project',action:'update'}})}>Update Project</button>
                            {/* </Alpha> */}
                            
                            {/* <Alpha ahref={pageurl.UPDATE_POST_URL}> */}
                                <button onClick={()=>props.history.push({pathname:pageurl.UPDATE_POST_URL,
                                                                     state:{page:'project',action:'delete'}})}>Delete Project</button>
                            {/* </Alpha> */}
                            
                        </div>
                        
                    </div>

                    <div className={AdminCss.article}>

                        <div className={AdminCss.header}>
                            <Three fontClass={AdminCss.three}>
                                Article
                            </Three>
                        </div>
                        
                        <div className={AdminCss.body}>

                            <Alpha ahref={pageurl.ARTICLE_POST_URL}>
                                <button>Add Article</button>
                            </Alpha>

                            {/* <Alpha ahref={pageurl.UPDATE_POST_URL}> */}
                                <button onClick={()=>props.history.push({pathname:pageurl.UPDATE_POST_URL,
                                                                     state:{page:'article',action:'update'}})}>Update Article</button>
                            {/* </Alpha> */}
                            
                            {/* <Alpha ahref={pageurl.UPDATE_POST_URL}> */}
                                <button onClick={()=>props.history.push({pathname:pageurl.UPDATE_POST_URL,
                                                                     state:{page:'article',action:'delete'}})}>Delete Article</button>    
                            {/* </Alpha> */}
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default withRouter(Admin);