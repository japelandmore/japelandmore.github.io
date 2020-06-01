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

function queryDBProject(projectItemQuery,setUpdateFormSection,updateSectionRef,setProjectObject,searchmsgRef) {    
    
    var ref = db.ref('projects');

    ref.on("value", function(snapshot){
    
        var arr = snapshot.val();
        
        if(arr){
            var name = projectItemQuery && projectItemQuery.project_name;
            var category = projectItemQuery && projectItemQuery.project_category;
            let status = false;
            if(name && category){
                    for(let i=0; i < Object.values(arr).length;i++){
                        if(Object.values(arr)[i].title === name && Object.values(arr)[i].category === category){
                            var projectObject = Object.values(arr)[i]
                            setProjectObject(projectObject);
                            getUpdateSection(updateSectionRef);
                            setUpdateFormSection(true);
                            status = true;
                        }
                    }
                    if(!status){
                        setUpdateFormSection(false);
                        searchmsgRef.current && (searchmsgRef.current.style.display = "block");
                        setTimeout(()=>{
                            searchmsgRef.current && (searchmsgRef.current.style.display = "none");
                        },5000);
                    }
            }
        }else{
            searchmsgRef.current && (searchmsgRef.current.style.display = "block");
            setTimeout(()=>{
                searchmsgRef.current && (searchmsgRef.current.style.display = "none");
            },5000);
        }
       
    },function(errorObject){
        console.log("The read failed " + errorObject.code);
    },)

}

function queryDBArticle(articleItemQuery,setUpdateFormSection,updateSectionRef,setArticleObject,searchmsgRef) {    
    
    var ref = db.ref('articles');

    ref.on("value", function(snapshot){
    
        var arr = snapshot.val();
        
        if(arr){
            var name = articleItemQuery && articleItemQuery.article_title;
            if(name){
                    for(let i=0; i < Object.values(arr).length;i++){
                        if(Object.values(arr)[i].title === name){
                            var articleObject = Object.values(arr)[i]
                            setArticleObject(articleObject);
                            getUpdateSection(updateSectionRef);
                            setUpdateFormSection(true);
                        }else{
                            setUpdateFormSection(false);
                            searchmsgRef.current && (searchmsgRef.current.style.display = "block");
                            setTimeout(()=>{
                                searchmsgRef.current && (searchmsgRef.current.style.display = "none");
                            },5000);
                        }
                    }
            }
        }else{
            searchmsgRef.current && (searchmsgRef.current.style.display = "block");
            setTimeout(()=>{
                searchmsgRef.current && (searchmsgRef.current.style.display = "none");
            },5000);
        }
       
    },function(errorObject){
        console.log("The read failed " + errorObject.code);
    },)

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
    queryDBProject,
    queryDBArticle,
    uploadData,
    getUpdateSection,
    handleForm,
    handleUpload,
    deleteData
}

export default UpdateController;