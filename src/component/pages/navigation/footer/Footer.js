import React from 'react';
import FooterCss from './Footer.module.css';
import social_image1 from '../../../assets/image/introduction/Icons.svg';
import social_image2 from '../../../assets/image/introduction/Icons-1.svg';
import social_image3 from '../../../assets/image/introduction/Icons-2.svg';
import social_image3b from '../../../assets/image/introduction/Iconsb.svg';
import social_image4 from '../../../assets/image/introduction/Icons-3.svg';
import {Para as BodyFont} from '../../../reusable/fonts';
import socialmediaurl from '../../../framework/url/socialmediaurl';

const Footer = ({other_click}) => {

    return(
        <footer className={FooterCss.footer}>
        
            <section className={FooterCss.social}>
                    
                    <div className={FooterCss.container}>
                        
                        <div className={FooterCss.soc_icon}>

                            <a target="_blank" href={socialmediaurl.LINKEDIN_URL} rel="noopener noreferrer" style={{textDecoration:"none"}}>    
                                <div className={FooterCss.img_container}><img src={social_image2} alt="linkedin logo" className={FooterCss.social_icons}></img></div>
                            </a>

                            <a target="_blank" href={socialmediaurl.BEHANCE_URL} rel="noopener noreferrer" style={{textDecoration:"none"}}>    
                                <div className={FooterCss.img_container}><img src={social_image1} alt="behance logo" className={FooterCss.social_icons}></img></div>
                            </a>

                            <a target="_blank" href={socialmediaurl.DRIBBLE_URL} rel="noopener noreferrer" style={{textDecoration:"none"}}>    
                                <div className={FooterCss.img_container}><img src={social_image3} alt="dribble logo" className={FooterCss.social_icons}></img></div>
                            </a>

                            <a target="_blank" href={socialmediaurl.MEDIUM_URL} rel="noopener noreferrer" style={{textDecoration:"none"}}>    
                                <div className={FooterCss.img_container}><img src={social_image3b} alt="medium logo" className={FooterCss.social_icons}></img></div>
                            </a>

                            <a target="_blank" href={socialmediaurl.TWITTER_URL} rel="noopener noreferrer" style={{textDecoration:"none"}}>    
                                <div className={FooterCss.img_container}><img src={social_image4} alt="twitter logo" className={FooterCss.social_icons}></img></div>
                            </a>

                        </div>
                        
                        <div className={FooterCss.text_copy}>
        
                            <BodyFont fontClass={FooterCss.credit}>Jeffery Abdulateef &copy; 2020 </BodyFont>                        
                            
                            {/* <a target="_blank" href="https://www.linkedin.com/in/frank-edekobi-500062129" rel="noopener noreferrer" */}
                            {/* style={{textDecoration:"none"}}> */}

                                <BodyFont fontClass={FooterCss.credit} fontStyle={{fontSize:".75em",marginTop:"10px",color:"#b39bff",cursor:"pointer"}} clickk={other_click}>
                                    Coded by Frank
                                </BodyFont>

                            {/* </a>                         */}
        
                        </div>
        
                    </div>

            </section>
        
        </footer>
    )
}

export default Footer;

