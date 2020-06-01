import Dexie from 'dexie'
import {indexdbservice} from '../../../services/STORAGE'

function createObjectStore(storename,data){
    var pricingtabletable = indexdbservice.createObjectStore(storename,data);
    return pricingtabletable;
}

function updateObjectStore(db,store,data){
    // if(data){
       return new Promise((resolve, reject) => {
           resolve(
            db.transaction('rw',store,async()=>{
                
                indexdbservice.deleteData(store).then(()=>{
                    
                    indexdbservice.storeData(store,data)
                    .catch(Dexie.BulkError, function (e) {
                        reject(console.error (e.failures.length))
                        return false;
                    });

                });

            })
           )
       })
    // }
}

function readObjectStore(table){
    if(table){
        return indexdbservice.readData(table);
    }
}

const indexdbevent = {
    createObjectStore,
    updateObjectStore,
    readObjectStore
}

export default indexdbevent;