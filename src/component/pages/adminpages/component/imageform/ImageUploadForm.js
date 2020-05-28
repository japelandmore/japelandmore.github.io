import React from 'react'
import ImageUploadFormCss from './ImageUploadForm.module.css';
import {Para} from '../../../../reusable/fonts'

const ImageUploadForm = ({projectObject,handleUpload,secondFormValidated,setFirstFormValidated,handleSubmit,
                          handleFormSubmit,inputstyle,buttonstyle,InputExternalStyle,uploadButton,
                          progressbar}) => {
    return (

        <div className={ImageUploadFormCss.imageupload}>
        
                <div className={ImageUploadFormCss.form}>

                    {/* uploaded image */}
                    {   projectObject.imageurl &&
                            <span className={ImageUploadFormCss.image_container}>
                                <img src={projectObject.imageurl} alt={projectObject.image_description}></img>
                            </span>
                    }
                    
                    {/* image upload */} 
                    <progress value={progressbar} max="100" ></progress>
                    <input type="file" placeholder="Upload Image" name="image_upload" accept="image/*" required
                            onChange={(e)=>handleUpload(e)} style={inputstyle} className={InputExternalStyle}></input>    
                    {
                        projectObject.image_uploadError !== "" ?
                        <Para fontClass={ImageUploadFormCss.error}>
                            {projectObject.image_uploadError}
                        </Para>
                        : <div style={{height: "20px"}}/>
                    }

                    {/* { */}
                        {/* !secondFormValidated ?  */}
                            
                            <button onClick={(e)=>handleSubmit(e)} style={buttonstyle} disabled={!uploadButton}>UPLOAD</button>

                            {/* : */}

                            <button onClick={(e)=>handleFormSubmit(e)} style={buttonstyle} >SUBMIT</button>
                    
                    {/* } */}
                    
                    <span style={{display:"block",width:"max-content",margin:"0 auto",padding:"30px 0",fontFamily:"encode_sans",
                                  color:"#000",textAlign:"center",cursor:"pointer",fontSize:".90em"}} onClick={()=>{setFirstFormValidated(false)}}>
                        Previous Page
                    </span>

                </div>
        
        </div>

    )
}

export default ImageUploadForm;