import React,{useEffect} from 'react';
import SideMenuCss from './SideMenu.module.css';
import {Alpha} from '../../../reusable/fonts'
import pageurl from '../../../framework/pageurl'
import social_image1 from '../../../assets/image/contact/Icons.svg';
import social_image2 from '../../../assets/image/contact/Icons-1.svg';
import social_image3 from '../../../assets/image/contact/Icons-2.svg';
import social_image3b from '../../../assets/image/contact/Icons-4.svg';
import social_image4 from '../../../assets/image/contact/Icons-3.svg';
import closeicon from '../../../assets/image/icons/closeicon.svg'

const SideMenu = ({url,reff,closemenu}) => {

    const [pageurls,setPageUrl] = React.useState({
        home : false,
        background : false,
        work : false,
        contact : false,
        articles : false
    })

    useEffect(()=>{
        function handleUrl(){
            if(url === '/'){
                setPageUrl({home : true});
            }else if(url === '/my-background'){
                setPageUrl({background : true});
            }else if(url === '/my-work'){
                setPageUrl({work : true});
            }else if(url === '/contact-me'){
                setPageUrl({contact : true});
            }else if(url === '/my-articles'){
                setPageUrl({articles : true});
            }
        }    
        handleUrl();
    },[url])

    
    return(

        <div className={SideMenuCss.sidemenu} ref={reff}>

            <div className={SideMenuCss.container}>

                <nav>

                    <div className={SideMenuCss.close_container}>
                        <img src={closeicon} alt="close icon" onClick={closemenu}></img>
                    </div>

                    <ul>
                        <div className={SideMenuCss.alpha_container}>
                            <Alpha ahref={pageurl.LANDING_PAGE_URL} fontClass={SideMenuCss.alpha}>
                                <li>Introduction</li>
                            </Alpha>    
                            {pageurls.home &&  <span className={SideMenuCss.line_container}>
                                <span className={SideMenuCss.line}>
                                </span>
                            </span>}
                        </div>

                        <div className={SideMenuCss.alpha_container}>
                            <Alpha ahref={pageurl.BACKGROUND_PAGE_URL} fontClass={SideMenuCss.alpha}>
                                <li>My Background</li>
                            </Alpha>
                            {pageurls.background && <span className={SideMenuCss.line_container}>
                                <span className={SideMenuCss.line}>
                                </span>
                            </span>}
                        </div>

                        <div className={SideMenuCss.alpha_container}>
                            <Alpha ahref={pageurl.WORK_PAGE_URL} fontClass={SideMenuCss.alpha}>
                                <li>My Work</li>
                            </Alpha>
                            {pageurls.work && <span className={SideMenuCss.line_container}>
                                <span className={SideMenuCss.line}>
                                </span>
                            </span>}
                        </div>

                        <div className={SideMenuCss.alpha_container}>
                            <Alpha ahref={pageurl.ARTICLE_PAGE_URL} fontClass={SideMenuCss.alpha}>
                                <li>My Articles</li>
                            </Alpha>
                            {pageurls.articles && <span className={SideMenuCss.line_container}>
                                <span className={SideMenuCss.line}>
                                </span>
                            </span>}
                        </div>

                        <div className={SideMenuCss.alpha_container}>
                            <Alpha ahref={pageurl.CONTACT_ME_URL} fontClass={SideMenuCss.alpha}>
                                <li>Contact Me</li>
                            </Alpha>
                            {pageurls.contact && <span className={SideMenuCss.line_container}>
                                <span className={SideMenuCss.line}>
                                </span>
                            </span>}
                        </div>

                    </ul>

                    <section className={SideMenuCss.socials}>
                        
                                <div className={SideMenuCss.containers}>
                
                                    <div className={SideMenuCss.soc_icon}>
                    
                                        <div className={SideMenuCss.img_container}><img src={social_image2} alt="" className={SideMenuCss.social_icons}></img></div>
                        
                                        <div className={SideMenuCss.img_container}><img src={social_image1} alt="" className={SideMenuCss.social_icons}></img></div>
                        
                                        <div className={SideMenuCss.img_container}><img src={social_image3} alt="" className={SideMenuCss.social_icons}></img></div>
                        
                                        <div className={SideMenuCss.img_container}><img src={social_image3b} alt="" className={SideMenuCss.social_icons}></img></div>
                        
                                        <div className={SideMenuCss.img_container}><img src={social_image4} alt="" className={SideMenuCss.social_icons}></img></div>
                                    
                                    </div>
                                    
                                </div>

                        </section>


                </nav>

            </div>

        </div>

    )

}

export default SideMenu;