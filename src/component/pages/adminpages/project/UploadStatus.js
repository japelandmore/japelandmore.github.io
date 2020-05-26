import React from 'react';
import {Two,Para,Alpha} from '../../../reusable/fonts/Font'
import pageurl from '../../../framework/url/pageurl/pageurl';

const UploadSuccess = ({ProjectCss,projectUploaded}) => {

    return(

        <div className={ProjectCss.modal_background}>
            
            <div className={ProjectCss.modal}>

                <div className={ProjectCss.container}>

                    <div className={ProjectCss.header}>

                        {
                            projectUploaded  ?
                        
                            <Two fontClass={ProjectCss.two}>
                                Project Saved Successfully
                            </Two>           
                            
                            :

                            <Two fontClass={ProjectCss.two}>
                                Project Not Saved
                            </Two>           

                        }

                    </div>

                    <div className={ProjectCss.body}>
                        
                        <div className={ProjectCss.main_option}>

                            {
                                projectUploaded  ?
                                    <>
                                        <Alpha ahref={pageurl.PROJECT_POST_URL}>
                                            <button>Add New Project</button>
                                        </Alpha>

                                        <button>View Project</button>
                                    </>
                                :

                                    <Alpha ahref={pageurl.PROJECT_POST_URL}>
                                        <button>Try Again</button>
                                    </Alpha>
                            }

                        </div>
                        
                        <div className={ProjectCss.other_option}>
                            <Alpha ahref={pageurl.LANDING_PAGE_URL}>
                                <Para fontClass={ProjectCss.para}>Back to Home Page</Para>
                            </Alpha>
                        </div>
                        
                    </div>

                </div>

            </div>

        </div>

    )

}

export default UploadSuccess;