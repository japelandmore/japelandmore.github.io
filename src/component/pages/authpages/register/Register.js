import React from 'react';
import RegisterCss from './Register.module.css'
import {Two,Para} from '../../../reusable/fonts'
import {withRouter} from 'react-router-dom'
import Status from '../../adminpages/status'
import pageurl from '../../../framework/url/pageurl'
import AuthController from '../../../framework/controllers/AuthController';

const Register = ({...props}) => {

    const[registerValues,setregisterValues] = React.useState({
        email: "",
        password: "",
        password2: ""
    });

    const[registerValuesError,setregisterValuesError] = React.useState({
        emailError: "",
        passwordError: "",
        passwordError2: ""
    });

    const[registered,setRegistered] = React.useState({
        process : false,
        status : false,
        sentVerification : false,
        verifiedUser : false,
        errorMsg : "",
        serverErrMsg : ""
    });

    function handleInput(e){
        setregisterValues({...registerValues,[e.target.name]:e.target.value});
    }

    function handleRegister(e){
        e.preventDefault();
        AuthController.signUp(registerValues,setRegistered,setregisterValuesError);
    }

    return(
        <div className={RegisterCss.register}>

            {registered.process && <Status status={registered.status} 
                            success={'Registration Successful'} 
                            additional_msg={
                                registered.serverErrMsg ?
                                `${registered.serverErrMsg}` 
                                :
                                registered.errorMsg ?
                                    `${registered.errorMsg}` 
                                :
                                registered.status ? 
                                `a verification link has been sent to  ${registerValues.email} , click 'SEND VERIFICATION' to resend if you checked your email and did not receive it`
                                :
                                ""
                            }
                            failure={'Registration Not Successful'} 
                            land={pageurl.LANDING_PAGE_URL} 
                            try_again={pageurl.REGISTEURL} 
                            new_action={pageurl.LOGINURL} 
                            verifiedUser={registered.verifiedUser}
                                sendVerification={()=>{ AuthController.verifyEmail() && alert(`email verification has been sent to ${registerValues.email}`)}}
                            notBtnText={registered.serverErrMsg ? "Try Again" : registered.errorMsg ? "VERIFY MAIL" : "Try Again" }
                            serverErrMsg={registered.serverErrMsg}
                            serverErrAction={()=>window.open(pageurl.REGISTEURL,'_self')}
                            buttonText={registered.sentVerification ?
                                "RESEND VERIFICATION" : "SEND VERIFICATION"
                            }
                            bottomAction={"Back to Home Page"}
                            />}

            <div className={RegisterCss.container}>

                <form className={RegisterCss.form}>

                    <div className={RegisterCss.header}>
                        <Two fontClass={RegisterCss.three}>Register</Two>
                        <Para fontClass={RegisterCss.para}>Kindly enter all required details</Para>
                    </div>

                    <div className={RegisterCss.body}>
                        <label>Email</label>
                        <input type="email" required onChange={(e)=>handleInput(e)} name="email"
                            value={registerValues.email} placeholder="Enter Email Address"/>
                        { registerValuesError.emailError ? <span className={RegisterCss.error}>
                            {registerValuesError.emailError}
                        </span> : <div style={{height: "40px"}}/>}
                        
                        <label>Password</label>
                        <input type="password" required onChange={(e)=>handleInput(e)} name="password"
                            value={registerValues.password} placeholder="Enter Password"/>
                        { registerValuesError.passwordError ? <span className={RegisterCss.error}>
                            {registerValuesError.passwordError}
                        </span> : <div style={{height: "40px"}}/>}

                        <label>Re-enter Password</label>
                        <input type="password" required onChange={(e)=>handleInput(e)} name="password2"
                            value={registerValues.password2} placeholder="Re-Enter Password"/>
                        { registerValuesError.passwordError2 ? <span className={RegisterCss.error}>
                            {registerValuesError.passwordError2}
                        </span> : <div style={{height: "40px"}}/>}

                        <button onClick={(e)=>handleRegister(e)}>SUBMIT</button>
                    </div>

                    <div className={RegisterCss.other}>
                        <Para fontClass={RegisterCss.para}>Have an account ?</Para>
                        <Para fontClass={`${RegisterCss.para} ${RegisterCss.link}`} clickk={()=>props.history.push(pageurl.LOGINURL)}>LOGIN</Para>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default withRouter(Register) 