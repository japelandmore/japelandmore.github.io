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
import Aos from 'aos'
import 'aos/dist/aos.css'
import HandleSubmit from './handleSubmit'


const Contact = () => {

    Aos.init();

    const [ formData, setFormData ] = React.useState({
        name : "", email : "", phone : "", company : "", subject : "", message : "",
        nameErr : "", emailErr : "", phoneErr : "", companyErr : "", subjectErr : "", messageErr : ""
    })

    const [ click, setClick ] = React.useState(false)

    const handleOnChange = (e) => {
        setFormData( { ...formData, [e.target.id] : e.target.value } );
    }

    const handleSubmit = () => {
        return e => {
            e.preventDefault();
            setClick( false );
            setTimeout(()=>{
                if(validateForm()){
                    setClick( true );
                }
            },500) 
        }
    }

    // eslint-disable-next-line
    const mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // eslint-disable-next-line
    const phoneformat = /^\d{7,}$/;
    const errormsg = (msg,status) => (<p className={`${ status ? "text-success" : "text-danger" }`} style={{fontSize:"12px"}}>
                    { msg || "Error" }</p>)

    //const checkPhone = (data) => {
    //     // eslint-disable-next-line
    //     return phoneformat.test(data.replace(/[\s()+\-\.]|ext/gi, ''))
    // }

    const checkLength = (data) => {
        return data.length > 3;
    }

    const validateForm = () => {

        const { name, email, 
            // phone, company, 
            subject, message } = formData;

        setFormData({...formData, nameErr : checkLength(name) ? "" : errormsg(name.length), 
                       emailErr : mailformat.test(email) ? "" : errormsg("Invalid email"),
                    //    phoneErr : checkPhone(phone) ? "" : errormsg("Invalid Phone Number"), 
                    //    companyErr : checkLength(company) ? "" : errormsg("Lenght should be more than 2"),
                       subjecterr : checkLength(subject) ? "" : errormsg, 
                       messageerr : message.length >= 10 ? "" : errormsg("Length of message should be 10 or more") })
        
        return  checkLength(name) && 
                mailformat.test(email) && 
                // checkPhone(phone) && 
                // checkLength(company) &&
                // checkLength(subject) && 
                message.length >= 10;
    }

    const clearInputData = () => {
        setFormData({name : "", email : "", phone : "", company : "", subject : "", message : ""})
    }

    return(

        <div className={ContactCss.contact}>

            <HandleSubmit click={ click } contactformprop={formData} clearInputData={clearInputData} />  
            
            <div className={ContactCss.topheader} data-aos="fade-right" data-aos-duration="2000">
                
                    <HeaderFont fontClass={ContactCss.headfont}>Get In Touch</HeaderFont>
                
            </div>

            <div className={ContactCss.container}>

                <div className={ContactCss.form_container} data-aos="fade-in" data-aos-duration="2000">

                    <form autoComplete="off" onSubmit={handleSubmit()} >

                        <section className={ContactCss.left} data-aos="fade-in" data-aos-duration="2000">
                            
                            <span className={ContactCss.holder}>
                                <input type="text" name="name" required autoComplete="off"
                                 id="name" onChange={handleOnChange} value={formData.name} />
                                <label htmlFor="fullname" className={ContactCss.label_name}>
                                    <span className={ContactCss.content_name}>Full Name *</span>
                                </label>
                            </span>
                            {formData.nameErr}
                            
                            <span className={ContactCss.holder}>
                                <input type="text" name="email" required autoComplete="off" 
                                 id="email" onChange={handleOnChange} value={formData.email} />
                                <label htmlFor="email" className={ContactCss.label_name}>
                                    <span className={ContactCss.content_name}>Email *</span>
                                </label>
                            </span>
                            {formData.emailErr}
                            
                            <span className={ContactCss.holder}>
                                <input type="text" name="phone" required autoComplete="off" 
                                 id="phone" onChange={handleOnChange} value={formData.phone} />
                                <label htmlFor="phone" className={ContactCss.label_name}>
                                    <span className={ContactCss.content_name}>Phone</span>
                                </label>
                            </span>
                            
                            <span className={ContactCss.holder}>
                                <input type="text" name="company" required autoComplete="off" 
                                 id="company" onChange={handleOnChange} value={formData.company} />
                                <label htmlFor="company" className={ContactCss.label_name}>
                                    <span className={ContactCss.content_name}>Company / Organization</span>
                                </label>
                            </span>
                            
                        </section>

                        {/* right */}
                        <section className={ContactCss.right} data-aos="fade-in" data-aos-duration="2000">

                            <label htmlFor="Subject" className={ContactCss.other_label}>Subject</label>

                            <select name="subject" id="subject" onChange={handleOnChange} value={formData.subject}>
                                <option>Select Option</option>
                                <option>Business Analysis</option>
                                <option>UI/UX Design</option>
                                <option>Web Design</option>
                                <option>I just want to say Hi!</option>
                            </select>
                            
                            <label htmlFor="" className={ContactCss.other_label}>Message *</label>
                            <textarea id="message" onChange={handleOnChange} value={formData.message}>

                            </textarea>
                            {formData.messageErr}

                            <button type="submit" >Get In Touch</button>

                        </section>

                    </form>

                </div>

                <div className={ContactCss.testimony_container} data-aos="fade-in" data-aos-duration="2000">

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

