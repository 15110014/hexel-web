import axios from 'axios';
import * as Congig from './../constants/Config';

export default function callApi(endpoint,method = 'GET',body){
    return axios({
        method : method,
        url:`${Congig.API_URL}/${endpoint}`,
        data : body
    }).catch(err=>{
        console.log(err);
    });
};