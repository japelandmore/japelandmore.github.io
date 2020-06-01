import firebase,{storage,db} from '../services/DATATRANSFER/FIREBASE'
// import {indexdbevent} from '../events/STORAGE'
// import Dexie from 'dexie';

function handleForm(object,fileType,objectError,setObjectError,setFirstFormValidated) {
    //validate form - UNDONE
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

function handleUpload(url,imageUpload,object,setObject,setSecondFormValidated,setUploadProgress){

    var image_name = object.id.toString();

    const uploadTask = storage.ref(`${url}/images/${image_name}`).put(imageUpload.image_upload);
    
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

            setSecondFormValidated(true);

        });

    });

}

function uploadData(url,object,setStatus,setUploaded,setUserDetails){

    var user = firebase.auth().currentUser;

    if(user !== null){
        console.log(user);
        setUserDetails({
            emailVerified : user.emailVerified
        })
    }

    const directoryName = object.id;
    
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

// async function readData(setProjectObject){

//     var db = (await new Dexie("project_form").open()).table('input_form');

//     const projectObject = await indexdbevent.readObjectStore(db);
    
//     if(projectObject){
//         await setProjectObject(projectObject[0]);
//     }

// }

// function savetoDB(projectObject){
    
    //save to browser db - DONE

        // join projectObject Keys to form a string.
        // var keyString = Object.keys(projectObject).join();
    
        // create table and pass keyString values (Keys) as columns in the table
        // var db = indexdbevent.createObjectStore('project_form',{
            // input_form: keyString,
        // });

        //update table with projectObjectValues
        // Promise.all([indexdbevent.updateObjectStore(db,db.input_form,projectObject)]);
// }

const ProjectController = {
    handleForm,
    handleUpload,
    uploadData,
}

export default ProjectController;