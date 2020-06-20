import firebase,{storage,db} from '../services/DATATRANSFER/FIREBASE'

function handleForm(object,setObject,setObjectError,setFirstFormValidated) {

    //validate form - UNDONE

    setFirstFormValidated(true);

};

function handleUpload(url,imageUpload,object,setObject,setSecondFormValidated,setUploadProgress){

    var image_name = object.id.toString();

    const uploadTask = storage.ref(`${url}/images/${image_name}`).put(imageUpload.image_upload);
    
    uploadTask.on('state_changed', 
    (snapshot)=>{
        const progress =Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress);
    },
    (error)=>{
        console.log(error,'baddest');
    },
    ()=>{
        storage.ref(`${url}/images`).child(image_name).getDownloadURL().then(url => {

            const imageurl = url;
            
            setObject({...object,imageurl})

            setSecondFormValidated(true);

        });

    });

}

function queryData(setContent) {    
    let page = "";
    let pageType = ""
    if(window.localStorage.getItem('admin')){
        page = JSON.parse(window.localStorage.getItem('admin'));
        switch(page.pageType){
            case 'project' : pageType = 'projects'; break;
            case 'article' : pageType = 'articles'; break;
            default : pageType='';break;
        }
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


function uploadData(url,object,setStatus,setUploaded,setUserDetails){
    
    var user = firebase.auth().currentUser;

    if(user !== null){
        console.log(user);
        setUserDetails({
            emailVerified : user.emailVerified
        })
    }

    const directoryName = object.id.toString();
    
    const uploadObject = db.ref(`${url}`).child(directoryName);    
    
    uploadObject.set({...object},(error)=>{
        if(error){
            setStatus(true);
            setUploaded(false);
        }else{
            setStatus(true);
            setUploaded(true);
        }
    });

}

function getUpdateSection(updateSectionRef){
    var yposition = updateSectionRef.current.getBoundingClientRect().y;
    window.scrollTo({top : yposition-100,behavior: 'smooth'});
}

function deleteData(url,object,status,deleteStatus,setUserDetails){

    var user = firebase.auth().currentUser;

    if(user !== null){
        console.log(user);
        setUserDetails({
            emailVerified : user.emailVerified
        })
    }

    var id = object && object.id.toString();
            
    try{
        db.ref(`${url}`).child(id).remove()
        .then(function() {
            status(true);
            deleteStatus(true);
        })
        .catch(function(error) {
            status(true);
            deleteStatus(false)
        });
    }catch(error){
        console.log(error.message);
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