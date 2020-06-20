import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Articles,Background,Contact,LandingPage,Work} from './component/pages/mainpages';
import {ControlPanel,Main} from './component/pages/adminpages'
import {Header,Footer,Menu,SideMenu} from './component/pages/navigation'
import pageurl from './component/framework/url/pageurl';
import {createBrowserHistory} from 'history';
import SwipeEffect from './component/reusable/effect'
import credit from './component/framework/credit';
import ProtectedRoute from './component/pages/navigation/protectedroute'
import Page404 from './component/pages/page404';
import {Login} from './component/pages/authpages'
import AuthController from './component/framework/controllers/AuthController'


function App() {

  let history = createBrowserHistory();

  const [menu,setMenu] = React.useState(false);

  React.useEffect(()=>{
    
    function doit(){
        if(history.location.pathname.includes('admin') && AuthController.getLoggedStatus()){
          setMenu(true);
        }

    }doit()

  },[history.location.pathname])

  const sidemenu = React.useRef();

  return (

   <Router basename={process.env.PUBLIC_URL}>
      

      <div className="app">

        <SideMenu url={history.location.pathname} reff={sidemenu} closemenu={()=>SwipeEffect.raiseMenu(sidemenu)}/>
      
        <Header url={history.location.pathname} clickmenu={()=>SwipeEffect.dropMenu(sidemenu)}/>

        <ControlPanel menu={menu} />

          <Menu />

            <div className={`main_container ${history.location.pathname === "/" ? "landing_page_height_handler" : "other_page_height_handler"}`}>

                <Switch>

                    <Route exact path={pageurl.LANDING_PAGE_URL} component={LandingPage} />

                    <Route exact path={pageurl.BACKGROUND_PAGE_URL} component={Background} />
                    
                    <Route exact path={pageurl.ARTICLE_PAGE_URL} component={Articles} />
                    
                    <Route exact path={pageurl.WORK_PAGE_URL} component={Work} />
                    
                    <Route exact path={pageurl.CONTACT_ME_URL} component={Contact} />

                    <Route exact path={pageurl.LOGINURL} component={Login} />

                    <ProtectedRoute exact path={pageurl.ADMIN_URL} component={Main} />

                    <Route path="*" component={Page404}/>
                  
                    <Route component={Page404}/>

                </Switch>

                <Footer other_click={()=>credit.creditHandler()}/>

            </div>

      </div>

   </Router>

  );
}

export default App;
