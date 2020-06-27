import React from 'react';
import LoginCss from './Login.module.css'
import {Two,Para} from '../../../reusable/fonts'
import {withRouter} from 'react-router-dom'
import Status from '../../adminpages/status'
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

            {logged.process && <Status status={logged.status} section={"auth"} additional_msg={logged.serverErrMsg} />}
                            
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