import React from 'react'
import Header from '../../pages/adminpages/component/statuscomponent/header'
import MainOption from '../../pages/adminpages/component/statuscomponent/mainoption'
import OtherOption from '../../pages/adminpages/component/statuscomponent/otheroption'
import pageurl from '../url/pageurl'

function getHeader(status,section,decision,pageAction,tableDecision,additionalmsg){
    let userDecision = "";    
    switch(decision){
        case 'project' : userDecision="Project"; break;        
        case 'article' : userDecision="Article"; break;
        case 'testimony' : userDecision="Testimony"; break;
        default : break;
    }
    
    switch(section){
        // admin pages
        case 'admin' :             
            switch(pageAction){
                // UPLOAD PAGE
                case 'add' :             
                        return <Header  status={status} 
                                        success={`${userDecision} Uploaded Successfully`} 
                                        failure={`${userDecision} Not Uploaded`} 
                                        additional_msg={additionalmsg} />
                // UPDATE PAGE 
                case 'decision' :
                    switch(tableDecision){
                        case 'edit' :   return <Header status={status} 
                                                       success={`${userDecision} Updated Successfully`} 
                                                       failure={`${userDecision} Not Updated`}
                                                       additional_msg={additionalmsg} />
                        case 'delete' : return <Header status={status} 
                                                       success={`${userDecision} Deleted Successfully`} 
                                                       failure={`${userDecision} Not Deleted`}
                                                       additional_msg={additionalmsg} />
                        default : return null;
                    }
                default : return null;
            }
        // auth pages
        case 'auth' : 
        return <Header  status={status} success={`Login Successful`}
                        additional_msg={additionalmsg}
                        failure={`Login Not Successful`} />
            
        // main pages
        case 'main' : 
            switch(decision){
                default : return null;
            }
        default : return null;
    }
}


function getMainOption(status,section,decision,pageAction,tableDecision){
    switch(section){
        // admin pages
        case 'admin' :             
            switch(pageAction){
                // UPLOAD PAGE

                case 'add' :             
                        return <MainOption  status={status} verifiedUser={status}
                                            new_action={()=>console.log('new action')}
                                            buttonText={"BACK TO ADMIN PAGE"}
                                            sendVerification={()=>console.log('send verification')}
                                            serverErrMsg={!status}
                                            serverErrAction={()=>console.log('server error')}
                                            notBtnText={'RETRY'}
                                            try_again={()=>console.log('send verification')}             
                                        />
                // UPDATE PAGE 
                case 'decision' :
                    switch(tableDecision){
                        case 'edit' :   return <MainOption  status={status}
                                                            new_action={()=>console.log('new action')}
                                                            buttonText={"BACK TO ADMIN PAGE"}
                                                            serverErrMsg={status}
                                                            serverErrAction={()=>console.log('server error')}
                                                            notBtnText={'RETRY'}
                                                            try_again={()=>console.log('send verification')}             
                                                        />
                        case 'delete' : return <MainOption  status={status}
                                                            new_action={()=>console.log('new action')}
                                                            buttonText={"BACK TO ADMIN PAGE"}
                                                            serverErrMsg={!status}
                                                            serverErrAction={()=>console.log('server error')}
                                                            notBtnText={'RETRY'}
                                                            try_again={()=>console.log('send verification')}             
                                                        />
                        default : return null;
                    }
                default : return null;
            }
        // auth pages
        case 'auth' : return <MainOption    status={status}
                                            new_action={pageurl.ADMIN_URL}
                                            buttonText={"CONTINUE TO ADMIN PAGE"}
                                            serverErrMsg={status}
                                            serverErrAction={()=>console.log('server error')}
                                            notBtnText={'RETRY'}
                                            try_again={()=>console.log('send verification')}             
                                        />
            
        // main pages
        case 'main' : 
            switch(decision){
                default : return null;
            }
        default : return null;
    }
}

function getOtherOption(section,decision,pageAction,tableDecision){
    
    switch(section){
        // admin pages
        case 'admin' :             
            switch(pageAction){
                // UPLOAD PAGE
                case 'add' :             
                        return <OtherOption />
                // UPDATE PAGE 
                case 'decision' :
                    switch(tableDecision){
                        case 'edit' :   return <OtherOption />
                        case 'delete' : return <OtherOption />
                        default : return null;
                    }
                default : return null;
            }
        // auth pages
        case 'auth' : 
            return null;
        // main pages
        // case 'main' : 
        //     switch(decision){
        //         default : return null;
        //     }
        default : return null;
    }
}

const StatusController = {
    getHeader,getMainOption,getOtherOption
}

export default StatusController;