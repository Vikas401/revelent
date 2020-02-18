import author from '../apis/Event';


export const createauthor = (user) => 
   async dispatch => {
       const response = await author.post('/author', { ...user });
           dispatch({
            type: 'CREATE_AUTHOR',
            payload: response.data
           })

     }

     export const updateEvent = (id,user) => 
    async dispatch => {
        const response = await author.patch(`/author/${id}`,  user);

            dispatch({
             type: 'UPDATE_AUTHOR',
             payload: response.data
            })
};

export const loadAuthor = () => 
async dispatch => {
    
        const response = await author.get('/author');
        console.log(response.data);

        dispatch({ type: 'FETCH_AUTHOR', payload: response.data})
       // dispatch(asyncActionFinish())
    
};