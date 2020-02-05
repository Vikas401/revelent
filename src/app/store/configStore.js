import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';
//import { createFirestoreInstance, firestoreReducer } from 'redux-firestore';
import rootReducer from '../reducers/rootReduser';
import thunk from 'redux-thunk';

// const rrfConfig = {
//     userProfiles: 'users',
//     attachAuthIsReady: true,
//     useFirestoreForProfile: true
// }

export const configStore = () => {

    const middlewares = [thunk];

    const composeEnhancer = composeWithDevTools(
        applyMiddleware(...middlewares)
   
    );
    const store = createStore(rootReducer, composeEnhancer);
    return store;
} 