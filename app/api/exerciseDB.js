import axios from 'axios';
import { rapidApiKey } from '../constants';
import exerciseData from './data';

const baseUrl =  "http://192.168.25.172:4321" // 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params)=>{
    try{
        const options = {
            method: 'GET', 
            url,
            params,
            headers: {
                    'X-RapidAPI-Key': rapidApiKey,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
            
        };
        const response = await axios.request(options);
        return response.data;
    }catch(err){
        console.log('error: ', err.message);
    }
}

export const fetchExercisesByBodypart = async (bodyPart)=>{
    let data = exerciseData[bodyPart];
    return data;
}