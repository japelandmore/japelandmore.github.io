import React from 'react';
import { withRouter } from 'react-router-dom';
import Page404Css from './Page404.module.css';
import {One,Para,Four} from '../../reusable/fonts'
// import {Redirect} from 'react-router-dom'
import pageurl from '../../framework/url/pageurl'
import catimg from '../../assets/image/gif/de7c30415be157a3f579b38bc6564461.gif'

const Page404 = () => {

    const [timeremaining,setTimeRemaining] = React.useState({
        time : 5,
        text: "seconds" 
    });

    const [redirect,setRedirect] = React.useState(false)

    React.useEffect(()=>{
        function doit(){
            setTimeout(()=>{
                if(timeremaining.time > 0){
                    setTimeRemaining({...timeremaining,'time': timeremaining.time - 1})
                }else{
                    setRedirect(true);
                }
            },1000);
        }doit()
    })

    return(

        <>

        { redirect ? window.open(pageurl.LANDING_PAGE_URL,'_self') :

            <div className={Page404Css.page404}>

                <div className={Page404Css.container}>

                    <div className={Page404Css.header}>
                        <One fontClass={Page404Css.one}>404</One>
                        <Para fontClass={Page404Css.para}>Sorry wrong page</Para>
                    </div>

                    <div className={Page404Css.body}>
                        <div className={Page404Css.image_container}>
                            <img src={catimg} alt="crying cat" />
                        </div>

                        <div className={Page404Css.other}>
                        <Four fontClass={Page404Css.three}>You'll be redirected to Landing Page in : 
                                    <span style={{color:"#fff"}}>&nbsp;{`${timeremaining.time} ${timeremaining.text}`}</span>
                        </Four>
                        {/* <button>GO TO LANDING PAGE</button> */}
                        </div>
                    </div>

                </div>

            </div>

        }

        </>

    )

}

export default withRouter(Page404);