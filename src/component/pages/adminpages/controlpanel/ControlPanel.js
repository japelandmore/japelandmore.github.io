import React from 'react';
import {ProjectUpload,ArticleUpload,Update,Admin,SideMenu} from '../adminpages'
import pageurl from '../../../framework/url/pageurl';
import ControlPanelContoller from '../../../framework/controllers/ControlPanelContoller'
import ControlPanelCss from './ControlPanel.module.css';


const ControlPanel = ({Route}) => {

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

        <div className={ControlPanelCss.menu}>
            <div className={ControlPanelCss.container} onClick={()=>handleMenu()}>
                <span id={ControlPanelCss.one}/>
                <span id={ControlPanelCss.two}/>
                <span id={ControlPanelCss.three}/>
            </div>
        </div>

            <SideMenu sidemenuRef={sidemenuRef} submenuRef={submenuRef} submenuRef2={submenuRef2} 
                submenuHandler={()=>submenuHandler()} submenuHandler2={()=>submenuHandler2()}/>

            <Route exact path={pageurl.ADMIN_URL} component={Admin} />

            <Route exact path={pageurl.PROJECT_POST_URL} component={ProjectUpload} />

            <Route exact path={pageurl.ARTICLE_POST_URL} component={ArticleUpload} />

            <Route exact path={pageurl.UPDATE_POST_URL} component={Update} />

        </>
    )
}

export default ControlPanel;