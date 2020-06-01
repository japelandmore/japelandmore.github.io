import Dexie from 'dexie'

function createObjectStore(dbname,schema) {
    // 'use strict';
    if(!('indexedDB' in window)) {
        console.log('This browser doesn\'t support IndexedDB');
        return;
    }
    var db = new Dexie(dbname);
    db.version(1).stores({...schema});
    return db;
}

async function storeData(store,data){
    return store.put({...data}).then(function(lastKey){
    })
}

function readData(table){
    return table.toArray();
}

function deleteData(store){
    return store.clear();
}

const indexdbservice = {
    createObjectStore,
    storeData,
    readData,
    deleteData
}


export default indexdbservice;

