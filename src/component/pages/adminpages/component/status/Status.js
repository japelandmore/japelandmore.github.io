import React from 'react';
import {Two,Para,Alpha} from '../../../../reusable/fonts/Font'
import StatusCss from './Status.module.css';
import {withRouter} from 'react-router-dom'
import pageurl from '../../../../framework/url/pageurl/pageurl';

const Status = ({status,success,failure,land,try_again,new_action,buttonText,
                additional_msg,verifiedUser,sendVerification,notBtnText,bottomAction,
                serverErrAction,serverErrMsg,...props}) => {

    return(

        <div className={StatusCss.modal_background}>
            
            <div className={StatusCss.modal}>

                <div className={StatusCss.container}>

                    <div className={StatusCss.header}>

                        {
                            status  ?
                        <>
                            <Two fontClass={StatusCss.two}>
                                {success}
                            </Two>           
                            <Para fontClass={StatusCss.para}>{additional_msg}</Para>
                        </>  
                            :
                        <>
                            <Two fontClass={StatusCss.two}>
                                {failure}
                            </Two>           
                            <Para fontClass={StatusCss.para}>{additional_msg}</Para>
                        </>
                        }

                    </div>

                    <div className={StatusCss.body}>
                        
                        <div className={StatusCss.main_option}>
                            {
                                status  ?

                                    verifiedUser ? 
                                        
                                        <Alpha ahref={new_action}>
                                            <button>{buttonText}</button>
                                        </Alpha>
                                    :

                                        <button onClick={sendVerification}>{buttonText}</button>

                                :
                                    serverErrMsg ?
                                        
                                        <button onClick={serverErrAction}>{notBtnText}</button>
                                    :
                                        <Alpha ahref={try_again}><button>{notBtnText}</button></Alpha>
                            }
                        </div>
                        
                        <div className={StatusCss.other_option}>
                            <Alpha ahref={pageurl.ADMIN_URL}>
                                <Para fontClass={StatusCss.para} >{bottomAction}</Para>
                            </Alpha>
                        </div>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}

export default withRouter(Status);