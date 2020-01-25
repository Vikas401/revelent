import { combineReducers } from "redux";
import testReducer from "../../features/testComponent/testReducer";


const rootReducer = combineReducers({
    test: testReducer
})
export default rootReducer;