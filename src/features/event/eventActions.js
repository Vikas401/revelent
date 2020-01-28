import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENT } from "./eventconstant";
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/asyncActions";
import { fetchSampleData } from "../../app/data/mokeApi";
import { toastr } from 'react-redux-toastr';

export const createEvent = (event) => {
   return async dispatch => {
       try{
           dispatch({
            type: CREATE_EVENT,
            payload: 
            {
                event
             }
           })
            toastr.success('Success!' ,'Event has Been Created')
       }catch(error){
           toastr.error('Oops', 'Something went wrong');
       }
     }
};

export const updateEvent = (event) => {
    return async dispatch => {
        try{
            dispatch({
             type: UPDATE_EVENT,
             payload: 
             {
                 event
              }
            })
             toastr.success('Success!' ,'Event has Been updated')
        }catch(error){
            toastr.error('Oops', 'Something went wrong');
        }
      }
};

export const deleteEvent = (eventId) => {
    return{
    type: DELETE_EVENT,
    payload:
    {
        eventId
     }
    }
   };

   export const loadEvent = () => {
       return async dispatch => {
           try{
               dispatch(asyncActionStart())
               const events = await fetchSampleData()

               dispatch({ type: FETCH_EVENT, payload: {events}})
               dispatch(asyncActionFinish())
           }catch(error) {
             console.log(error);
             dispatch(asyncActionError)
           }
       }
   }

