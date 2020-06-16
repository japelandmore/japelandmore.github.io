import firebase,{auth} from '../services/DATATRANSFER/FIREBASE'

//sign up the user
function signUp(values,setStatus,setValuesError){
    
    var email = values.email;
    var password = values.password;
    var password2 = values.password2;

    if(password === password2){
        auth.createUserWithEmailAndPassword(email, password)
        .then((cred) => {
            
            if(verifyEmail()){
                //signup successful - email verification sent
                setStatus({
                    process : true,
                    status : true,
                    sentVerification : true,
                    verifiedUser : cred.user.emailVerified,
                    errorMsg : "",
                    serverErrMsg : ""
                })
                
            }else{
                //signup successful - email verification not sent
                setStatus({
                    process : true,
                    status : true,
                    sentVerification : false,
                    verifiedUser : cred.user.emailVerified,
                    errorMsg : "email verification not sent",
                    serverErrMsg : ""
                })
            }   
                
        }).catch((error)=>{
            setStatus({
                process : true,
                status : false,
                sentVerification : false,
                verifiedUser : false,
                errorMsg : "",
                serverErrMsg : error.message
            })
            
            console.log(error.message)
        })    

    }else{
        setValuesError({
            passwordError : "password doesn't match",
            passwordError2 : "password doesn't match"
        })
    }

}

function verifyEmail(){
    //validate user email
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function(){
        return true;
    }).catch(function(error){
        return false;
    })
}

function signIn(values,setStatus,setValuesError){

    // console.log(firebase.auth().currentUser);
    var email = values.email;
    var password = values.password;
    
    if(password && email){

        auth.signInWithEmailAndPassword(email, password)
        .then((cred) => {
            
            if(cred.user.emailVerified){
                //signup successful - email verified
                setStatus({
                    process : true,
                    status : true,
                    sentVerification : false,
                    verifiedUser : cred.user.emailVerified,
                    errorMsg : "",
                    serverErrMsg : ""
                })
                setStorageTime(email,true);
            
            }else{
                //signup successful - email not verified
                setStatus({
                    process : true,
                    status : true,
                    sentVerification : false,
                    verifiedUser : cred.user.emailVerified,
                    errorMsg : "user email has not been verified",
                    serverErrMsg : ""
                })
                setStorageTime(email,false);

            }
            
            
        }).catch((error)=>{
            
            //signup not successful
            setStatus({
                process : true,
                status : false,
                sentVerification : false,
                verifiedUser : false,
                errorMsg : "",
                serverErrMsg : error.message
            })

            setStorageTime(email,false);

        });

    }else if(!password){
        setValuesError({
            passwordError : "password input empty",
        })
    }else if(!email){
        setValuesError({
            emailError : "email input empty",
        })
    }

}

function setStorageTime(email,status){
    var myHour = new Date();
    myHour.setHours(new Date().getHours() + 1);
    
    if(status){
        window.localStorage.setItem('loggedIn',JSON.stringify({'email':email,"status": status,"logTime":myHour.toString()}))
    }

}

function getLoggedStatus(){
    if(window.localStorage.getItem('loggedIn')){
        var storedObj = JSON.parse(window.localStorage.getItem('loggedIn'));
        // return storedObj.logTime >= new Date().toString();
    }
    return true;
}


function resetPass(values,setStatus,setValuesError){

}

const AuthController = {
    signUp,
    signIn,
    resetPass,
    getLoggedStatus,
    verifyEmail
}

export default AuthController;