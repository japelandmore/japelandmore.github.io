import React from 'react';
import SideMenuCss from './SideMenu.module.css';
import {Alpha} from '../../../reusable/fonts'
import pageurl from '../../../framework/url/pageurl';
import {withRouter} from 'react-router-dom'


const SideMenu = ({sidemenuRef,submenuRef,submenuRef2,submenuHandler,submenuHandler2,...props}) => {
    return(
        <div className={SideMenuCss.sidemenu} ref={sidemenuRef}>

            <div className={SideMenuCss.container}>

                <nav>
                    <ul>
                        <div className={SideMenuCss.icon_container}>

                        </div>
                        <div className={SideMenuCss.licon}>
                            <Alpha ahref={pageurl.ADMIN_URL}>
                                <li>Main Menu</li>
                            </Alpha>
                        </div>

                        <div className={SideMenuCss.menu_container} ref={submenuRef}>

                            <div className={SideMenuCss.licon} onClick={submenuHandler}>
                                <li>Project</li>
                            </div>
                            
                            <div className={`${SideMenuCss.licon} ${SideMenuCss.submenu}`}>

                                <Alpha ahref={pageurl.PROJECT_POST_URL} fontStyle={{width:"100%",display:"block"}}>
                                    <li>Add Project</li>
                                </Alpha>
                                
                                <li onClick={()=>props.history.push({pathname:pageurl.UPDATE_POST_URL,
                                                                     state:{page:'project',action:'update'}})}>Update Project</li>
                                <li onClick={()=>props.history.push({pathname:pageurl.UPDATE_POST_URL,
                                                                     state:{page:'project',action:'delete'}})}>Delete Project</li>
                            
                            </div>

                        </div>

                        <div className={SideMenuCss.menu_container} ref={submenuRef2}>
                            
                            <div className={SideMenuCss.licon} onClick={submenuHandler2}>
                                <li>Article</li>
                            </div>
                            
                            <div className={`${SideMenuCss.licon} ${SideMenuCss.submenu}`}>
                                
                                <Alpha ahref={pageurl.ARTICLE_POST_URL} fontStyle={{width:"100%",display:"block"}}>
                                    <li>Add Article</li>
                                </Alpha>

                                <li onClick={()=>props.history.push({pathname:pageurl.UPDATE_POST_URL,
                                                                     state:{page:'article',action:'update'}})}>Update Article</li>
                                <li onClick={()=>props.history.push({pathname:pageurl.UPDATE_POST_URL,
                                                                     state:{page:'article',action:'delete'}})}>Delete Article</li>
                            
                            </div>

                        </div>
                        
                        
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