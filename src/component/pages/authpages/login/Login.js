import React from 'react';
import LoginCss from './Login.module.css'
import {Two,Para} from '../../../reusable/fonts'
import {withRouter} from 'react-router-dom'
import Status from '../../adminpages/component/status'
import pageurl from '../../../framework/url/pageurl'
import AuthController from '../../../framework/controllers/AuthController';

const Login = ({...props}) => {

    const[loginValues,setloginValues] = React.useState({
        email : "",password : ""
    });

    const[loginValuesError,setloginValuesError] = React.useState({
        emailError: "",
        passwordError: "",
    });

    const[logged,setLogged] = React.useState({
        process : false,
        status : false,
        sentVerification : false,
        verifiedUser : false,
        errorMsg : "",
        serverErrMsg : ""
    });

    function handleInput(e){
        setloginValues({...loginValues,[e.target.name]:e.target.value});
    }

    function handleRegister(e){
        e.preventDefault();
        AuthController.signIn(loginValues,setLogged,setloginValuesError);
    }

    return(

        <div className={LoginCss.login}>

            {logged.process && <Status status={logged.status} 
                            success={'Login Successful'} 
                            additional_msg={
                                logged.serverErrMsg ? 
                                `${logged.serverErrMsg}` 
                                :
                                logged.errorMsg ?
                                    `${logged.errorMsg}` 
                                :
                                logged.status ? 
                                `Congrats!!!, you have been successfully logged in, kindly click 'ADMIN PAGE' to edit your project(s) & article(s)`
                                :
                                ""
                            }
                            failure={'Login Not Successful'} 
                            land={pageurl.LANDING_PAGE_URL} 
                            try_again={pageurl.LOGINURL} 
                            new_action={pageurl.ADMIN_URL} 
                            verifiedUser={logged.verifiedUser}
                            sendVerification={()=>{ AuthController.verifyEmail();
                                                    alert(`email verification has been sent to ${loginValues.email}`)}}
                            notBtnText={ logged.serverErrMsg ? "RESET PASSWORD" : logged.errorMsg ? "VERIFY MAIL" : "Try Again"}
                            serverErrMsg={logged.serverErrMsg}
                            serverErrAction={()=>AuthController.resetPass()}
                            buttonText={logged.sentVerification ?
                                "ADMIN PAGE" : "RESEND VERIFICATION"
                            }
                            bottomAction={"Back to Home Page"}
                            />}
                            

            <div className={LoginCss.container}>

                <form className={LoginCss.form}>

                    <div className={LoginCss.header}>
                        <Two fontClass={LoginCss.three}>Login</Two>
                        <Para fontClass={LoginCss.para}>Kindly enter all required details</Para>
                    </div>

                    <div className={LoginCss.body}>
                        <label>Email</label>
                        <input type="email" required onChange={(e)=>handleInput(e)} name="email"
                            value={loginValues.email} placeholder="Enter Email Address"/>
                        { loginValuesError.emailError ? <span className={LoginCss.error}>
                            {loginValuesError.emailError}
                        </span> : <div style={{height: "40px"}}/>}
                        
                        <label>Password</label>
                        <input type="password" required onChange={(e)=>handleInput(e)} name="password"
                            value={loginValues.password} placeholder="Enter Password"/>
                        { loginValuesError.passwordError ? <span className={LoginCss.error}>
                            {loginValuesError.passwordError}
                        </span> : <div style={{height: "40px"}}/>}

                        <button onClick={(e)=>handleRegister(e)}>LOGIN</button>
                    </div>

                    <div className={LoginCss.other}>
                        <Para fontClass={LoginCss.para}>Dont have an account ?</Para>
                        <Para fontClass={`${LoginCss.para} ${LoginCss.link}`} clickk={()=>props.history.push(pageurl.REGISTEURL)}>REGISTER</Para>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default withRouter(Login) 