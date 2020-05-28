import {storage,db} from '../services/DATATRANSFER/FIREBASE'

function handleForm(projectObject,setProjectObject,setProjectObjectError,setFirstFormValidated) {

    //validate form - UNDONE

    setFirstFormValidated(true);

};

function handleUpload(imageUpload,projectObject,setProjectObject,setSecondFormValidated,setUploadProgress){

    const uploadTask = storage.ref(`projects/images/${projectObject.project_name}`).put(imageUpload.image_upload);
    
    uploadTask.on('state_changed', 
    (snapshot)=>{
        const progress =Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadProgress(progress);
    },
    (error)=>{
        console.log(error);
    },
    ()=>{
        storage.ref('projects/images').child(projectObject.project_name).getDownloadURL().then(url => {

            const imageurl = url;
            
            setProjectObject({...projectObject,imageurl})

            setSecondFormValidated(true);

        });

    });

}

function queryDB(projectItemQuery,setUpdateFormSection,updateSectionRef,setProjectObject,searchmsgRef) {
    
    var ref = db.ref('projects');

    ref.on("value", function(snapshot){

        var arr = snapshot.val();

        // console.log(arr);

        if(arr){

            var name = projectItemQuery && projectItemQuery.project_name;
            
            var category = projectItemQuery && projectItemQuery.project_category;

            // project category
            if(name && category){

                if(arr[category]){

                    for(let i=0; i < Object.values(arr[category]).length;i++){
                        
                        if(Object.values(arr[category])[i].project === name){
                            
                            var projectObject = Object.values(arr[category])[i]

                            setProjectObject(projectObject);
                            getUpdateSection(updateSectionRef);
                            setUpdateFormSection(true);
                                
                        }else{
                            setUpdateFormSection(false);
                        }
                
                    }
                }else{
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

function uploadData(projectObject,setProjectStatus,setProjectUploaded){
    
    const directoryName = projectObject.id;
    
    const category = projectObject.project_category;
    
    const uploadObject = db.ref(`projects/${category}`).child(directoryName);    
    
    uploadObject.set({...projectObject},(error)=>{
        if(error){
            setProjectStatus(true);
            setProjectUploaded(false);
        }else{
            setProjectStatus(true);
            setProjectUploaded(true);
        }
    });

}

function getUpdateSection(updateSectionRef){
    var yposition = updateSectionRef.current.getBoundingClientRect().y;
    window.scrollTo({top : yposition-100,behavior: 'smooth'});
}

function deleteData(object,status,deleteStatus){

    var id = object && object.id;
            
    var category = object && object.project_category;

    try{
        db.ref(`projects/${category}`).child(id).remove()
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
    queryDB,
    uploadData,
    getUpdateSection,
    handleForm,
    handleUpload,
    deleteData
}

export default UpdateController;