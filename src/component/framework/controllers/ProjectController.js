import {storage,db} from '../services/DATATRANSFER/FIREBASE'
import {indexdbevent} from '../events/STORAGE'
import Dexie from 'dexie';


function handleForm(projectObject,setProjectObject,setProjectObjectError,setFirstFormValidated) {

        setFirstFormValidated(true);

};

function handleUpload(imageUpload,projectObject,setProjectObject,setSecondFormValidated){

    const uploadTask = storage.ref(`projects/images/${projectObject.project_name}`).put(imageUpload.image_upload);
    uploadTask.on('state_changed', 
    (snapshot)=>{

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


function queryDB(query_category,query_project_name) {
    
    var ref = db.ref('projects');

    ref.on("value", function(snapshot){

        var arr = snapshot.val();

        // project category
        for(let i=0; i < Object.values(arr[query_category]).length;i++){
            
            if(Object.values(arr[query_category])[i].project === query_project_name){
                // console.log(Object.keys(arr[query_category])[i]); 
                
                var projectObject = Object.values(arr[query_category])[i]

                savetoDB(projectObject);
            }
       
        }
       
    },function(errorObject){
        console.log("The read failed " + errorObject.code);
    });
}



async function readData(setProjectObject){

    var db = (await new Dexie("project_form").open()).table('input_form');

    const projectObject = await indexdbevent.readObjectStore(db);
    
    if(projectObject){
        await setProjectObject(projectObject[0]);
    }

}

function savetoDB(projectObject){
    
    //save to browser db - DONE

        // join projectObject Keys to form a string.
        var keyString = Object.keys(projectObject).join();
    
        // create table and pass keyString values (Keys) as columns in the table
        var db = indexdbevent.createObjectStore('project_form',{
            input_form: keyString,
        });

        //update table with projectObjectValues
        Promise.all([indexdbevent.updateObjectStore(db,db.input_form,projectObject)]);
}


function deleteData(query_category,query_project_name){

    db.ref(`projects/${query_category}`).child(query_project_name).remove();

}

const ProjectController = {
    handleForm,
    handleUpload,
    uploadData,
    readData,
    queryDB,
    deleteData
}

export default ProjectController;