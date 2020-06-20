import {combineReducers} from 'redux';
import {editReducer,deleteReducer,contentReducer,formdataReducer,imagedataReducer} from './allReducers'

const reducers = combineReducers ({
    editAction : editReducer,
    deleteAction : deleteReducer,
    storeContent : contentReducer,
    FormData : formdataReducer,
    ImageData : imagedataReducer
});

export default reducers;

