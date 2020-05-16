import React from 'react';
import FooterCss from './Footer.module.css';
import social_image1 from '../../../assets/image/introduction/Icons.svg';
import social_image2 from '../../../assets/image/introduction/Icons-1.svg';
import social_image3 from '../../../assets/image/introduction/Icons-2.svg';
import social_image3b from '../../../assets/image/introduction/Iconsb.svg';
import social_image4 from '../../../assets/image/introduction/Icons-3.svg';
import {Para as BodyFont} from '../../../reusable/fonts';


const Footer = () => {

    return(
        <footer className={FooterCss.footer}>
        
            <section className={FooterCss.social}>
                    
                    <div className={FooterCss.container}>
                        
                        <div className={FooterCss.soc_icon}>
        
                            <div className={FooterCss.img_container}><img src={social_image2} alt="" className={FooterCss.social_icons}></img></div>
            
                            <div className={FooterCss.img_container}><img src={social_image1} alt="" className={FooterCss.social_icons}></img></div>
            
                            <div className={FooterCss.img_container}><img src={social_image3} alt="" className={FooterCss.social_icons}></img></div>
            
                            <div className={FooterCss.img_container}><img src={social_image3b} alt="" className={FooterCss.social_icons}></img></div>
            
                            <div className={FooterCss.img_container}><img src={social_image4} alt="" className={FooterCss.social_icons}></img></div>
                        
                        </div>
                        
                        <div className={FooterCss.text_copy}>
        
                            <BodyFont fontClass={FooterCss.credit}>Jeffery Abdulateef &copy; 2020 </BodyFont>                        
                            
                            <a target="_blank" href="https://www.linkedin.com/in/frank-edekobi-500062129" rel="noopener noreferrer"
                            style={{textDecoration:"none"}}>

                                <BodyFont fontClass={FooterCss.credit} fontStyle={{fontSize:".75em",marginTop:"10px",color:"#b39bff"}}>
                                    Coded by Frank
                                </BodyFont>

                            </a>                        
        
                        </div>
        
                    </div>

            </section>

            {/* <section className={FooterCss.dev}>
                
                <div className={FooterCss.text_copy}>
                
                    <a target="_blank" href="https://www.linkedin.com/in/frank-edekobi-500062129" rel="noopener noreferrer">

                        <BodyFont fontClass={FooterCss.credit}>Coded by Frank</BodyFont>

                    </a>                        

                </div>

            </section> */}
        
        </footer>
    )
}

export default Footer;

