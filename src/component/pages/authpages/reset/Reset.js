import React from 'react';
import ResetCss from './Reset.module.css'
import {Two,Para} from '../../../reusable/fonts'
import {withRouter} from 'react-router-dom'
import Status from '../../adminpages/component/status'
import pageurl from '../../../framework/url/pageurl'
import AuthController from '../../../framework/controllers/AuthController';

const Reset = () => {

    const[resetValues,setResetValues] = React.useState({});

    const[resetValuesError,setResetValuesError] = React.useState({
        emailError: "",
        passwordError: "",
        passwordError2: ""
    });

    const [reset,setReset] = React.useState({
        process : false,
        status : false
    })

    function handleInput(e){
        setResetValues({...resetValues,[e.target.name]:e.target.value});
    }

    function handleReset(e){
        e.preventDefault();
        AuthController.resetPass(resetValues,setReset,setResetValuesError);
    }

    return(
        <div className={ResetCss.reset}>
            
            {reset.process && <Status status={reset.status} 
                            success={'Password Reset Successful'} failure={'Password Reset Not Successful'} 
                            land={pageurl.LANDING_PAGE_URL} try_again={pageurl.RESET_URL} 
                            new_action={pageurl.LOGINURL} buttonText={"LOGIN"} />}


            <div className={ResetCss.container}>

                <form className={ResetCss.form}>

                    <div className={ResetCss.header}>
                        <Two fontClass={ResetCss.three}>Reset Password</Two>
                        <Para fontClass={ResetCss.para}>Kindly enter all required details</Para>
                    </div>

                    <div className={ResetCss.body}>

                        <label>Email</label>
                        <input type="email" required onChange={(e)=>handleInput(e)} name="email" 
                            value={()=>resetValues.email} placeholder="Enter Email Address"/>
                        { resetValuesError.emailError ? <span className={ResetCss.error}>
                            {resetValuesError.emailError}
                        </span> : <div style={{height: "40px"}}/>}
                        
                        
                        <label>New Password</label>
                        <input type="password" required onChange={(e)=>handleInput(e)} name="password"
                            value={()=>resetValues.password} placeholder="Enter New Password"/>
                        { resetValuesError.passwordError ? <span className={ResetCss.error}>
                            {resetValuesError.passwordError}
                        </span> : <div style={{height: "40px"}}/>}

                        
                        <label>Re-enter New Password</label>
                        <input type="password" required onChange={(e)=>handleInput(e)} name="password2"
                            value={()=>resetValues.password2} placeholder="Re-Enter New Password"/>
                        { resetValuesError.passwordError2 ? <span className={ResetCss.error}>
                            {resetValuesError.passwordError2}
                        </span> : <div style={{height: "40px"}}/>}

                        <button onClick={(e)=>handleReset(e)}>SUBMIT</button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default withRouter(Reset) 