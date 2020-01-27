import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstant";
import { createReducer } from "../../app/common/utills/reducerUtils";

const initialState = {
    data: 42
}

const incrementCounter = (state) => {
   return {...state, data: state.data + 1 }
}
const decreamentCounter = (state) => {
  return {...state, data: state.data - 1}
}

export default createReducer(initialState,{
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decreamentCounter
});