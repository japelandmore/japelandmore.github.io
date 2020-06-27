const editReducer = (state="", action) => {
    switch(action.type) {
        case 'EDIT' :
            return state = action.payload;
        default :
            return state;
    }
}

const deleteReducer = (state="", action) => {
    switch(action.type) {
        case 'DELETE' :
            return state = action.payload;
        default :
            return state;
    }
}

const contentReducer = (state="", action) => {
    switch(action.type) {
        case 'CONTENT' :
            console.log(action.payload)
            return state = action.payload;
        default :
            return state;
    }
}

const formdataReducer = (state="", action) => {
    switch(action.type) {
        case 'FORMDATA' :
            console.log(action.payload)
            return state = action.payload;
        default :
            return state;
    }
}

const imagedataReducer = (state="", action) => {
    switch(action.type) {
        case 'IMAGEDATA' :
            console.log(action.payload)
            return state = action.payload;
        default :
            return state;
    }
}

const viewProjectReducer = (state="", action) => {
    switch(action.type){
        case 'LOADVIEWPAGE' :
            return state = action.payload;
        default :
            return state;
    }
}

export {
    editReducer,
    deleteReducer,
    contentReducer,
    formdataReducer,
    imagedataReducer,
    viewProjectReducer
};