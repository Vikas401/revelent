import { toastr } from 'react-redux-toastr';
import users from '../../authApi/user';


export const userPostInsert = user => async dispatch => {
    try{
      const response =  await users.post('/signup', { ...user });
      dispatch({
        type: 'SIGN_UP',
        payload: response.data
      })
      await localStorage.setItem('token', response.data.token);
      toastr.success('Success', 'Your Registration is complete')
    }catch(err){
      console.log(err);
    }
  }
  
  export const userPostFetch = user => async dispatch => {
    try{
      const response =  await users.post('/signin', { ...user });
      dispatch({
        type: 'SIGN_IN',
        payload: response.data
      })
      await localStorage.setItem('token', response.data.token);
      toastr.success('Success', 'Your login succesfully')
    }catch(err){
      console.log(err);
    }
  }

  export const logOut = () => async dispatch => {
    try{
    dispatch({

      type: 'SIGN_OUT',
    })
    localStorage.removeItem('token');
  }catch(err){
    console.log(err)
  }
  } 

  export const getProfileFetch = user => async dispatch => {
   try{
    const token = localStorage.token
    
     if(token){
      const response =  await users.put('/profile', { ...user });
      console.log(response.data)
      dispatch({
        type: 'UPDATE_PROFILE',
        payload: response.data,
      })
     
     }
   }catch(err){
     console.log(err);
   }
  
  }
 