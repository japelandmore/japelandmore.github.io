import React from 'react'
import emailjs,{init} from 'emailjs-com'
import * as json from './json'
import * as font from '../../../reusable/fonts'
import spinner from './spinner.svg'

init(process.env.REACT_APP_EMAIL_JS_USER_ID);

class HandleSubmit extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            loading : false, message : ""
        }
    }

    handleSubmit = () => {
            
        const { name, email, phone, company, subject, message } = this.props.contactformprop;

        const { clearInputData, messageResponse } = this.props;

        const templateParams = {
            from_client : "JAPELANDMORE : " + name, 
            from_name: name, 
            from_phone: phone,
            from_company: company,
            from_email: email, 
            to_name: "Jeffery",
            from_subject : subject, 
            from_message: message
        };
        
        this.setState({loading : true})

        emailjs
        .send(process.env.REACT_APP_EMAIL_JS_SERVICE_ID,process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID_CONTACT, templateParams,process.env.REACT_APP_EMAIL_JS_USER_ID)
        .then((response)=>{
            this.setState({loading : false, message: response.status });
            messageResponse(response.status);
            clearInputData();
        }).catch((err)=>{
            this.setState({loading : false, message: err })
            messageResponse(err);
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.click !== this.props.click){
            if(this.props.click===true){
                document.querySelector('#validay') && document.querySelector('#validay').click()
                this.handleSubmit();
            }
        }
    }

    render() {

        const {title,closeCrumb} = json.titleJson();

        const {modalContainer,modalContent,modalHeader,modalHeaderContainer,modalBodyText,
            modalCloseContainer,modalDialog,modalBody,modalBodyContent} = json.modalJson();

        const {Six,Three} = font

        return(
            <>
            <span id="validay" data-toggle="modal" data-target="#exampleModalCenter" className="d-flex position-relative" 
                style={{zIndex:40000000000000000000000000000000}}/>
            
            <div className={`${modalContainer.className}`} style={{...modalContainer.style}} id="exampleModalCenter" 
                tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >

                <div className={`${modalDialog.className}`} style={{...modalDialog.style}} role="document">

                    <div className={`${modalContent.className}`} style={{...modalContent.style}}>

                        <div className={`${modalHeader.className}`} style={{...modalHeader.style}}>
                            
                            <span className={`${modalHeaderContainer.className}`} style={{...modalHeaderContainer.style}}>

                                <Six fontClass={`${title.className}`} fontStyle={{...title.style}}>
                                    Contact Us
                                </Six>

                                <span className={`${modalCloseContainer.className}`} style={{...modalCloseContainer.style}} >

                                    <i className={`far fa-window-close ${closeCrumb.className}`} style={{...closeCrumb.style}} 
                                        aria-hidden="true" data-dismiss="modal" /> 

                                </span>

                            </span>

                        </div>

                        <div className={`${modalBody.className}`} style={{...modalBody.style}}>

                            <span className={`${modalBodyContent.className}`} style={{...modalBodyContent.style}}>
                                {!this.state.loading ?
                                    <>
                                        { this.state.message === 200 ?
                                        <Three fontClass={`${modalBodyText.className}`} fontStyle={{...modalBodyText.style}}>
                                            Message Submitted Successfully!
                                        </Three> 
                                        :
                                        <Three fontClass={`${modalBodyText.className}`} fontStyle={{...modalBodyText.style}}>
                                            Message Not Submitted
                                        </Three>    
                                    }
                                    </>
                                :
                                    <img src={spinner} alt="spinner" />
                                }
                            </span>  
                        </div>
                    </div>
                </div>
            </div>
            </>    
        )
    }
}

export default HandleSubmit;