import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:9999',
        // params:{
        //      headers: {
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json',
        //      },
        //       body: JSON.stringify()
        // }
})