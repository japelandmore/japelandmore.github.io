import React from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom';
import pageurl from '../../../framework/url/pageurl';
import AuthController from '../../../framework/controllers/AuthController';

const renderPage = (Component,props) =>{
    return <Route render = {() => <Component {...props} />}/>
}

const reDirect=(props,page)=> {
    return <Redirect to={
        {
            pathname: page,
            state: {
                from: props.location
            }
        }
    }/> 
}

const ProtectedRoute = ({component: Component,...rest}) => {

    const [userLogged] = React.useState(AuthController.getLoggedStatus())

    return(
    
        <Route {...rest} render={       
            (props) => {

                if(userLogged){
                    return renderPage(Component,props);                    
                }else{
                    return reDirect(props,pageurl.PAGE404);                    
                }
            }
        } />
    
    )
}

export default withRouter(ProtectedRoute);