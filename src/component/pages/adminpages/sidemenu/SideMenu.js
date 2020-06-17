import React from 'react';
import SideMenuCss from './SideMenu.module.css';
import {Alpha} from '../../../reusable/fonts'
import pageurl from '../../../framework/url/pageurl';
import {withRouter} from 'react-router-dom'
import AdminPageController from '../../../framework/controllers/AdminPageController'
import SideMenuComponent from './SideMenuComponent'

const SideMenu = ({sidemenuRef,submenuRef,submenuRef2,submenuHandler,submenuHandler2,...props}) => {

    function handlePage(page,action){
        AdminPageController.setPage(page,action)
    }

    return(
        <div className={SideMenuCss.sidemenu} ref={sidemenuRef}>

            <div className={SideMenuCss.container}>

                <nav>
                    <ul>

                        <div className={SideMenuCss.icon_container}>

                        </div>

                        <div className={SideMenuCss.licon}>
                            <Alpha ahref={pageurl.ADMIN_URL} click={()=>{handlePage('main','')}} fontStyle={{width:"100%",display:"block"}}>
                                <li>Main Menu</li>
                            </Alpha>
                        </div>


                        <SideMenuComponent submenuRef={submenuRef} submenuHandler={submenuHandler} 
                                           handlePage={handlePage} title={"Project"} subtitle1={"Add Project"}
                                           subtitle2={"View All Projects"} pageType={"project"} 
                                           pageAction1={"add"} pageAction2={"viewall"} />


                        <SideMenuComponent submenuRef={submenuRef} submenuHandler={submenuHandler} 
                                           handlePage={handlePage} title={"Article"} subtitle1={"Add Article"}
                                           subtitle2={"View All Articles"} pageType={"article"} 
                                           pageAction1={"add"} pageAction2={"viewall"} />
                        

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