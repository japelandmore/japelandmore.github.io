import firebase,{storage,db} from '../services/DATATRANSFER/FIREBASE'

function handleForm(object,fileType,objectError,setObjectError,setFirstFormValidated) {
    queryDB(object,fileType,objectError,setObjectError,setFirstFormValidated)
}

function queryDB(object,fileType,objectError,setObjectError,setFirstFormValidated){
    
    var ref = db.ref(fileType);
    let duplicate = false;
    
    ref.on("value", function(snapshot){
        var arr = snapshot.val();
        
        if(arr){
            var name = object.title;
            if(name){
                for(let i=0; i < Object.values(arr).length;i++){
                    if(Object.values(arr)[i].title === name){
                        duplicate = true;
                        var titleError = "TITLE ALREADY EXISTS IN DATABASE!!!";
                        setObjectError({...objectError,'titleError':titleError}); 
                    }
                }
                if(!duplicate){
                    setFirstFormValidated(true);
                }
            }
        }else{
            setFirstFormValidated(true);
        }
    },function(errorObject){
        console.log("The read failed " + errorObject.code);
    },)
    return duplicate;
}

function handleUpload(url,id,objectUpload,object,setObject,setUploadProgress){
    
    if(objectUpload.imageurl){

            const image_name = id.toString();

            const uploadTask = storage.ref(`${url}/images/${image_name}`).put(objectUpload.imageurl);
            
            uploadTask.on('state_changed', 
            (snapshot)=>{
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setUploadProgress(progress);
            },
            (error)=>{
                console.log(error);
            },
            ()=>{
                storage.ref(`${url}/images`).child(image_name).getDownloadURL().then(url => {
                    const imageurl = url;
                    setObject({...object,imageurl})
                });
            });
        }
}

function uploadData(url,obj,imgobject,setStatus,setUploaded){

    var user = firebase.auth().currentUser;

    if(user !== null){

        const object = ({...obj,...imgobject})
    
        const directoryName = object.id;
        
        const uploadObject = db.ref(`${url}`).child(directoryName);    
        
        uploadObject.set({...object},(error)=>{
            if(error){
                // setStatus(true);
                // setUploaded(false);
            }else{
                // setStatus(true);
                // setUploaded(true);
            }
        });

    }

}

const ProjectController = {
    handleForm,
    handleUpload,
    uploadData
}

export default ProjectController;