 const initialState = {
   authenticated: false,
   currentUser: null
 }



  export default (state = initialState, action) => {
    switch (action.type){
    
        case 'SIGN_IN':
          return {...state,authenticated:true, currentUser: action.payload};
          case 'SIGN_OUT':
            return {...state, authenticated: false, currentUser: null}
          default:
        
          return state;
    }
  }

 