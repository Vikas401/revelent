import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form';
import { reducer as ToastrReducer } from 'react-redux-toastr';
import testReducer from "../../features/testComponent/testReducer";
import eventReducer from "../../features/event/eventReducer";
import modalReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../../features/async/asyncReducer";
import { userPostInsert } from "../../features/auth/authActions";

//import {firebaseReducer, firestoreReducer} from 'react-redux-firebase';


const rootReducer = combineReducers({
    
    form: FormReducer,
    test: testReducer,
    event: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer,
    toastr: ToastrReducer,
    userInfo: userPostInsert
})
export default rootReducer;