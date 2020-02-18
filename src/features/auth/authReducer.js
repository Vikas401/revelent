 const initialState = {
   authenticated: false,
   currentUser: null
 }



  export default (state = initialState, action) => {
    switch (action.type){
    
        case 'SIGN_IN':
          return {...state,authenticated:true, currentUser:action.payload};
          
          case 'SIGN_OUT':
            return {...state, authenticated: false, currentUser: null}
          
          case 'UPDATE_PROFILE':
          return {...state, authenticated:true, currentUser:action.payload}

          // case 'GET_PROFILE':
          //   return {...state, authenticated: true, currentUser:action.payload}
          default:
        
          return state;
    }
  }

 