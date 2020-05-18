import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Articles,Background,Contact,LandingPage,Work} from './component/pages/mainpages';
import {Header,Footer,Menu,SideMenu} from './component/pages/navigation'
import pageurl from './component/framework/pageurl';
import {createBrowserHistory} from 'history';
import SwipeEffect from './component/reusable/effect'
import credit from './component/framework/credit';


function App() {

  let history = createBrowserHistory();

  const sidemenu = React.useRef();

  return (

   <Router basename={process.env.PUBLIC_URL}>
      

      <div className="app">

        <SideMenu url={history.location.pathname} reff={sidemenu} closemenu={()=>SwipeEffect.raiseMenu(sidemenu)}/>
      
        <Header url={history.location.pathname} clickmenu={()=>SwipeEffect.dropMenu(sidemenu)}/>

          <Menu />

            <div className={`main_container ${history.location.pathname === "/" ? "landing_page_height_handler" : "other_page_height_handler"}`}>

                <Switch>

                    <Route exact path={pageurl.LANDING_PAGE_URL} component={LandingPage} />

                    <Route exact path={pageurl.BACKGROUND_PAGE_URL} component={Background} />
                    
                    <Route exact path={pageurl.ARTICLE_PAGE_URL} component={Articles} />
                    
                    <Route exact path={pageurl.WORK_PAGE_URL} component={Work} />
                    
                    <Route exact path={pageurl.CONTACT_ME_URL} component={Contact} />

                </Switch>

                <Footer other_click={()=>credit.creditHandler()}/>

            </div>

        

      </div>

   </Router>

  );
}

export default App;
