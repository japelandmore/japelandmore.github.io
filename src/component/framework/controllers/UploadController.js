import {storage,db} from '../services/DATATRANSFER/FIREBASE'
// import {indexdbevent} from '../events/STORAGE'
// import Dexie from 'dexie';


function handleForm(object,setObject,setObjectError,setFirstFormValidated) {
    //validate form - UNDONE
    setFirstFormValidated(true);
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

function uploadData(url,object,setStatus,setUploaded){
    
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