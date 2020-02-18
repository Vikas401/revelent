import _ from 'lodash';


export default (state = {}, action) => {
    switch(action.type){
       
        case 'CREATE_AUTHOR':
            return {...state, [action.payload.id]: action.payload};
       
        case 'UPDATE_AUTHOR':
            return {...state, [action.payload.id]: action.payload};
           
        case 'FETCH_AUTHOR':
           return { ...state, ..._.mapKeys(action.payload, 'id') }; 
          
           default: 
           return state;

};
}