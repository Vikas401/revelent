import users from '../../authApi/user';
export const userPostInsert = user => async dispatch => {
    try{
      const response =  await users.post('/signup', { ...user });
      dispatch({
        type: 'SIGN_UP',
        payload: response.data,
      })
      //  console.log(response.data)
      await localStorage.setItem('token', response.data.token);
     // dispatch(loginUser(response.data.user))
      
    }catch(err){
      console.log(err);
    }
  }
  const loginUser = userObj => ({
    type: 'SIGN_IN',
    payload: userObj
})
  export const userPostFetch = user => async dispatch => {
    try{
      const response =  await users.post('/signin', { ...user });
      dispatch({
        type: 'SIGN_IN',
        payload: response.data,
      })
       
      await localStorage.setItem('token', response.data.token);
      dispatch(loginUser(response.data.user))
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

  // export const getProfileFetch = user => async dispatch => {
  //  try{
  //   const token = localStorage.token

  //    if(token){
  //     const response =  await users.get('/profile', { ...user });
  //     dispatch({
  //       type: 'SIGN_IN',
  //       payload: response.data,
  //     })
  //     dispatch(loginUser(response.data.user))
  //    }
  //  }catch(err){
  //    console.log(err);
  //  }
  
  // }
 