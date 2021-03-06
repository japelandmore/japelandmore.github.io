import React from 'react';
import {One as HeaderFont,Five,Para as BodyFont} from '../../../reusable/fonts'
import ContactCss from './Contact.module.css';
import TestimonialSlider from './testimonial/TestimonialSlider';
import social_image1 from '../../../assets/image/contact/Icons.svg';
import social_image2 from '../../../assets/image/contact/Icons-1.svg';
import social_image3 from '../../../assets/image/contact/Icons-2.svg';
import social_image3b from '../../../assets/image/contact/Icons-4.svg';
import social_image4 from '../../../assets/image/contact/Icons-3.svg';
import socialmediaurl from '../../../framework/url/socialmediaurl';

const Contact = () => {

    return(

        <div className={ContactCss.contact}>
            
            <div className={ContactCss.topheader}>
                
                    <HeaderFont fontClass={ContactCss.headfont}>Get In Touch</HeaderFont>
                
            </div>

            <div className={ContactCss.container}>

                <div className={ContactCss.form_container}>

                    <form autoComplete="off">

                        {/* left */}
                        <section className={ContactCss.left}>
                            
                            <span className={ContactCss.holder}>
                                <input type="text" name="fullname" required autoComplete="off"></input>
                                <label for="fullname" className={ContactCss.label_name}>
                                    <span className={ContactCss.content_name}>Full Name</span>
                                </label>
                            </span>
                            
                            <span className={ContactCss.holder}>
                                <input type="text" name="email" required autoComplete="off"></input>
                                <label for="email" className={ContactCss.label_name}>
                                    <span className={ContactCss.content_name}>Email</span>
                                </label>
                            </span>
                            
                            <span className={ContactCss.holder}>
                                <input type="text" name="phone" required autoComplete="off"></input>
                                <label for="phone" className={ContactCss.label_name}>
                                    <span className={ContactCss.content_name}>Phone</span>
                                </label>
                            </span>
                            
                            <span className={ContactCss.holder}>
                                <input type="text" name="company" required autoComplete="off"></input>
                                <label for="company" className={ContactCss.label_name}>
                                    <span className={ContactCss.content_name}>Company / Organization</span>
                                </label>
                            </span>
                            
                        </section>

                        {/* right */}
                        <section className={ContactCss.right}>

                            <label for="Subject" className={ContactCss.other_label}>Subject</label>
                            <select name="subject">
                                <option>Select Option</option>
                                <option>Business Analysis</option>
                                <option>UI/UX Design</option>
                                <option>Web Design</option>
                                <option>I just want to say Hi!</option>
                            </select>
                            

                            <label for="" className={ContactCss.other_label}>Message</label>
                            <textarea>

                            </textarea>

                            <button>Get In Touch</button>

                        </section>

                    </form>

                </div>

                <div className={ContactCss.testimony_container}>

                    <div className={ContactCss.test_bond}>
                    
                        {/* header */}
                        <section>
                            <Five fontClass={ContactCss.headermain_title}>WHAT PAST CLIENTS ARE SAYING</Five>
                        </section>

                        {/* testimony */}
                        <section className={ContactCss.testimonial_section}>

                            <TestimonialSlider WorkCss={ContactCss} OtherCssLeft={ContactCss.leftslide} OtherCssRight={ContactCss.rightslide} />

                        </section>

                        {/* footer */}
                        <section className={ContactCss.socials}>
                        
                                <div className={ContactCss.containers}>

                                    <div className={ContactCss.text_copy}>
                        
                                        <BodyFont fontClass={ContactCss.credit}>Contact Me - 07088884625</BodyFont>
                                        <BodyFont fontClass={ContactCss.credit}>japelandmore@gmail[dot]com</BodyFont>                        
                                        <br/>
                                    </div>
                                        
                                    <div className={ContactCss.soc_icon}>
                                        <a target="_blank" href={socialmediaurl.LINKEDIN_URL} rel="noopener noreferrer" style={{textDecoration:"none"}}>    
                                            <div className={ContactCss.img_container}><img src={social_image2} alt="linkedin logo" className={ContactCss.social_icons}></img></div>
                                        </a>

                                        <a target="_blank" href={socialmediaurl.BEHANCE_URL} rel="noopener noreferrer" style={{textDecoration:"none"}}>    
                                            <div className={ContactCss.img_container}><img src={social_image1} alt="behance logo" className={ContactCss.social_icons}></img></div>
                                        </a>

                                        <a target="_blank" href={socialmediaurl.DRIBBLE_URL} rel="noopener noreferrer" style={{textDecoration:"none"}}>    
                                            <div className={ContactCss.img_container}><img src={social_image3} alt="dribble logo" className={ContactCss.social_icons}></img></div>
                                        </a>

                                        <a target="_blank" href={socialmediaurl.MEDIUM_URL} rel="noopener noreferrer" style={{textDecoration:"none"}}>    
                                            <div className={ContactCss.img_container}><img src={social_image3b} alt="medium logo" className={ContactCss.social_icons}></img></div>
                                        </a>

                                        <a target="_blank" href={socialmediaurl.TWITTER_URL} rel="noopener noreferrer" style={{textDecoration:"none"}}>    
                                            <div className={ContactCss.img_container}><img src={social_image4} alt="twitter logo" className={ContactCss.social_icons}></img></div>
                                        </a>
                                    </div>
                                    
                                </div>

                        </section>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Contact;

