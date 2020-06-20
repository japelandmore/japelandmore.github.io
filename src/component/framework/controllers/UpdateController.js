import firebase,{storage,db} from '../services/DATATRANSFER/FIREBASE'

function handleForm(object,setObject,setObjectError,setFirstFormValidated) {

    //validate form - UNDONE

    setFirstFormValidated(true);

};

function handleUpload(url,id,objectUpload,object,setObject,setUploadProgress){

    if(objectUpload.imageurl){

        var image_name = id.toString();
        
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
                // setUploadButton(false);
            });
        });
    }
}

function queryData(setContent,decision) {    
    let pageType = ""
    switch(decision){
            case 'project' : pageType = 'projects'; break;
            case 'article' : pageType = 'articles'; break;
            default : pageType='';break;
    }
    
    if(pageType){
        var ref = db.ref(pageType);
        ref.on("value", function(snapshot){
            var arr = snapshot.val();
            if(arr){
                setContent(Object.values(arr));
            }
        },function(errorObject){
            console.log("The read failed " + errorObject.code);
        },)
    }
}


function uploadData(url,object,setStatus,setUploaded){
    
    var user = firebase.auth().currentUser;

    if(user !== null){
    
        const directoryName = object.id.toString();
        
        const uploadObject = db.ref(`${url}`).child(directoryName);    
        
        uploadObject.set({...object},(error)=>{
            if(error){
                // setStatus(true);
                // setUploaded(false);
                console.log('not successful')
            }else{
                // setStatus(true);
                // setUploaded(true);
                console.log('successful')
            }
        });
        
    }

}

function getUpdateSection(updateSectionRef){
    var yposition = updateSectionRef.current.getBoundingClientRect().y;
    window.scrollTo({top : yposition-100,behavior: 'smooth'});
}

function deleteData(url,object,status,deleteStatus){

    var user = firebase.auth().currentUser;

    if(user !== null){
    
        var id = object && object.id.toString();
            
        try{
            db.ref(`${url}`).child(id).remove()
            .then(function() {
                // status(true);
                // deleteStatus(true);
                console.log('successful')
            })
            .catch(function(error) {
                // status(true);
                // deleteStatus(false)
                console.log('unsuccessful')
            });
        }catch(error){
            console.log(error.message);
        }

    }

}

const UpdateController = {
    queryData,
    uploadData,
    getUpdateSection,
    handleForm,
    handleUpload,
    deleteData
}

export default UpdateController;