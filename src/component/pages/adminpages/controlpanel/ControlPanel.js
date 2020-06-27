import React from 'react';
import {SideMenu} from '../adminpages'
import ControlPanelContoller from '../../../framework/controllers/ControlPanelContoller'
import ControlPanelCss from './ControlPanel.module.css';

const ControlPanel = ({menu}) => {

    const sidemenuRef = React.useRef();
    const submenuRef = React.useRef();
    const submenuRef2 = React.useRef();

    function handleMenu(){
        ControlPanelContoller.menuhandler(sidemenuRef);
    }

    function submenuHandler(){
        ControlPanelContoller.submenuhandler(submenuRef,submenuRef2);
    }

    function submenuHandler2(){
        ControlPanelContoller.submenuhandler2(submenuRef2,submenuRef);
    }

    return (
        <>
            {/* HAMBURGER MENU */}
            {menu && <div className={ControlPanelCss.menu}>
                <div className={ControlPanelCss.container} onClick={()=>handleMenu()}>
                    <span id={ControlPanelCss.one}/>
                    <span id={ControlPanelCss.two}/>
                    <span id={ControlPanelCss.three}/>
                </div>
            </div>}

            {/* SIDE MENU */}
            {menu && <SideMenu sidemenuRef={sidemenuRef} submenuRef={submenuRef} submenuRef2={submenuRef2} 
                submenuHandler={()=>submenuHandler()} submenuHandler2={()=>submenuHandler2()}/>}

        </>
    )
}

export default ControlPanel;