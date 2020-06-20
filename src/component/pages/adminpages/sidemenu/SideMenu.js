import React from 'react';
import SideMenuCss from './SideMenu.module.css';
import {Alpha} from '../../../reusable/fonts'
import pageurl from '../../../framework/url/pageurl';
import {withRouter} from 'react-router-dom'
import AdminPageController from '../../../framework/controllers/AdminPageController'
import SideMenuComponent from './SideMenuComponent'

const SideMenu = ({sidemenuRef,submenuRef,submenuRef2,submenuHandler,submenuHandler2,...props}) => {

    function handlePage(pageAction,pageDecision){
        props.history.push(pageurl.ADMIN_URL,{pageAction:pageAction,pageDecision:pageDecision});
    }

    return(
        <div className={SideMenuCss.sidemenu} ref={sidemenuRef}>

            <div className={SideMenuCss.container}>

                <nav>
                    <ul>

                        {/* <div className={SideMenuCss.icon_container}>

                        </div> */}

                        <div className={SideMenuCss.licon}>
                            <Alpha ahref={pageurl.ADMIN_URL} click={()=>{handlePage('main','')}} fontStyle={{width:"100%",display:"block"}}>
                                <li>Main Menu</li>
                            </Alpha>
                        </div>


                        <SideMenuComponent submenuRef={submenuRef} submenuHandler={submenuHandler} 
                                           title={"Project"} 
                                           subtitle1={"Add Project"} 
                                           subtitle2={"View All Projects"} 
                                           handlePage1={()=>{handlePage('add','project')}} 
                                           handlePage2={()=>{handlePage('viewall','project')}} 
                                        />


                        <SideMenuComponent submenuRef={submenuRef} submenuHandler={submenuHandler} 
                                           title={"Article"} 
                                           subtitle1={"Add Article"}
                                           subtitle2={"View All Articles"} 
                                           handlePage1={()=>{handlePage('add','article')}} 
                                           handlePage2={()=>{handlePage('viewall','article')}} 
                                        />
                        

                        <div className={SideMenuCss.licon}>
                            <li onClick={()=>window.open(pageurl.LANDING_PAGE_URL,'_self')}>Exit</li>
                        </div>

                    </ul>
                </nav>

            </div>
        
        </div>
    )
}


export default withRouter(SideMenu);