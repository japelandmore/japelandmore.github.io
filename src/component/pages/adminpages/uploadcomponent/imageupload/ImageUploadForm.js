import React from 'react'
import ImageUploadFormCss from './ImageUploadForm.module.css';
import {Three,Para} from '../../../../reusable/fonts'
import UploadController from '../../../../framework/controllers/UploadController'
import loader from '../../../../assets/image/gif/loader.gif'
import {storeImageData} from '../../../../../actions'
import {useDispatch,useSelector} from 'react-redux'

const ImageUploadForm = ({url}) => {

    const dispatch = useDispatch();

    const [object,setObject] = React.useState({imageurl:""})
    const [objectUpload,setObjectUpload] = React.useState({})
    const [uploadProgress,setUploadProgress] = React.useState({progress : 0})

    const contentId = useSelector(state => state.FormData.id)
    
    function handleUpload(e){
        try{
            const image = e.target.files[0];
            setObjectUpload({...objectUpload,'imageurl':image});
        }catch(error){
            console.log(error.message);
        }
    }

    dispatch(storeImageData(object));

    function reset(){
        setObject({});
        setObjectUpload({});
        setUploadProgress({progress:0})
    }
    
    React.useEffect(()=>{
        function handleSubmit(){
            !object.imageurl && UploadController.handleUpload(url,contentId,objectUpload,object,setObject,setUploadProgress);
        }handleSubmit();
    })


    return (
        
        <>

            <div className={ImageUploadFormCss.container}>

                <div className={ImageUploadFormCss.imageupload}>
                
                        <div className={ImageUploadFormCss.form}>

                            {/* uploaded image */}
                            {   object.imageurl ?
                                    <span className={ImageUploadFormCss.image_container}>
                                        <img src={object.imageurl} alt={object.description}></img>
                                    </span>
                                :
                                    
                                    <div className={ImageUploadFormCss.header}>
                                        <Three fontClass={ImageUploadFormCss.three}>Upload Image</Three>
                                    </div>
                                    
                            }
                            
                            {/* image upload */} 
                            <progress value={uploadProgress} max="100" ></progress>
                           
                            
                            
                            {
                            !object.imageurl  ?
                                <input type="file" placeholder="Upload Image" name="image_upload" accept="image/*" required
                                        onChange={(e)=>handleUpload(e)}>
                                </input>    
                            :
                                uploadProgress > 99 &&
                                <div className={ImageUploadFormCss.img_opt_container}>

                                    <Para fontClass={ImageUploadFormCss.img_opt} clickk={()=>{reset()}}>Choose another image</Para>

                                </div>
                            }

                            {
                                objectUpload.imageurl && uploadProgress < 99 &&
                                <div className={ImageUploadFormCss.img_opt_container}>
                                    <img src={loader} alt="loader gif format"></img>
                                </div>
                            }
                            
                            {
                                object.image_uploadError !== "" ?
                                
                                    <Para fontClass={ImageUploadFormCss.error}>
                                        {object.image_uploadError}
                                    </Para>
                                
                                : 
                                
                                    <div style={{height: "20px"}}/>
                            }

                            {/* <button onClick={(e)=>handleSubmit(e)} disabled={!uploadButton}>UPLOAD</button> */}

                        </div>
                
                </div>

            </div>
            
        </>
    
    )

}

export default ImageUploadForm;