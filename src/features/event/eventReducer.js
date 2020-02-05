import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENT} from "./eventconstant";
import _ from 'lodash';
//import { createReducer } from "../../app/common/utills/reducerUtils";
 
     

 export default (state = {}, action) => {
     switch(action.type){
        
         case CREATE_EVENT:
             return {...state, [action.payload.id]: action.payload};
        
         case UPDATE_EVENT:
             return {...state, [action.payload.id]: action.payload};
            
         case FETCH_EVENT:
            return { ...state, ..._.mapKeys(action.payload, 'id') }; 
           
         case DELETE_EVENT:
             return [
                   
                ...state.filter(event => event.id !== action.payload.eventId)
               
               ];
               default: 
               return state;
    
 };
}
//  const updateEvent = (state, payload) => {
//      return [
//          ...state.filter(event => event.id !== payload.event.id), payload.event
//         ];
//  };
//  const deleteEvent = (state, payload) => {
    
//      return [
        
//          ...state.filter(event => event.id !== payload.eventId)
        
//         ];
//  };
//  const fetchEvent = (state, payload) => {
//      console.log(payload);
//    return payload.response;
//  }
