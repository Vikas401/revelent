import axios from 'axios';
  
//const token = localStorage.token;

export default axios.create({
    baseURL: 'https://revent-node-server.herokuapp.com',
        //  params:{
        //       headers: {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        //         'Content-Type': 'application/json',
        //         Accept: 'application/json',
        //         'Authorization': `Bearer ${token}`
            // },
            //   body: JSON.stringify()
         //}
});