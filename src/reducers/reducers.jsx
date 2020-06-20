import {combineReducers} from 'redux';
import {editReducer,deleteReducer,contentReducer} from './allReducers'

const reducers = combineReducers ({
    editAction : editReducer,
    deleteAction : deleteReducer,
    storeContent : contentReducer
});

export default reducers;

