import  axios  from 'axios'
import React from 'react'
import { BASE_URL } from '../utils/constant'

async function GetApi(endPoint) {
   try{
     let data = await axios.get(BASE_URL+endPoint)
     return data.data
    }catch(err){
      console.log(err)
    }
    
  
}

export default GetApi