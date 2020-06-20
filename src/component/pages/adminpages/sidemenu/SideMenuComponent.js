import React from 'react'
import SideMenuCss from './SideMenu.module.css'
import pageurl from '../../../framework/url/pageurl'
import {Alpha} from '../../../reusable/fonts'

const SideMenuComponent = ({title,subtitle1,subtitle2,handlePage1,handlePage2}) => {

    const [menuAction,setMenuAction] = React.useState(false)


    return (
        
        <div className={`${SideMenuCss.menu_container} ${menuAction ? SideMenuCss.open : SideMenuCss.close}`} 
                         >

            <div className={SideMenuCss.licon} onClick={()=>setMenuAction(!menuAction)}>                    
                <li>{title}</li>
            </div>
                            
            <div className={`${SideMenuCss.licon} ${SideMenuCss.submenu}`}>

                <Alpha ahref={pageurl.ADMIN_URL} click={handlePage1} fontStyle={{width:"100%",display:"block"}} >
                    <li>{subtitle1}</li>
                </Alpha>                

                <Alpha ahref={pageurl.ADMIN_URL} click={handlePage2} fontStyle={{width:"100%",display:"block"}}>
                    <li>{subtitle2}</li>
                </Alpha>
                             
            </div>

        </div>

    )
}

export default SideMenuComponent