import {combineReducers} from 'redux';
import {editReducer,deleteReducer,contentReducer,formdataReducer,imagedataReducer,viewProjectReducer} from './allReducers'

const reducers = combineReducers ({
    editAction : editReducer,
    deleteAction : deleteReducer,
    storeContent : contentReducer,
    FormData : formdataReducer,
    ImageData : imagedataReducer,
    ProjectView : viewProjectReducer
});

export default reducers;

