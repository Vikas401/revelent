import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENT } from "./eventconstant";
//import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/asyncActions";
////import { fetchSampleData } from "../../app/data/mokeApi";
import { toastr } from 'react-redux-toastr';
import events from '../../apis/Event';
//import history from 'history';



    
      
    
  
  

export const createEvent = (event) => 
   async dispatch => {
       const response = await events.post('/events', { ...event });
           dispatch({
            type: CREATE_EVENT,
            payload: response.data
           })
           toastr.success('Success', 'Your Post is  created')

     }


export const updateEvent = (id,event) => 
    async dispatch => {
        const response = await events.patch(`/events/${id}`,  event);

            dispatch({
             type: UPDATE_EVENT,
             payload: response.data
            })
            toastr.success('Success', 'Your event is updated')

        
      
};

export const deleteEvent = (eventId) => {
    return async dispatch => {
        await events.delete(`/events/${eventId}`);
        dispatch({
            type: DELETE_EVENT,
         payload: eventId
   })
   toastr.success('Success', 'Your event is delete')

    }
   };

   export const loadEvent = () => 
       async dispatch => {
           
               const response = await events.get('/events');
               //console.log(response.data);
 
               dispatch({ type: FETCH_EVENT, payload: response.data})
              // dispatch(asyncActionFinish())
           
       };
   

