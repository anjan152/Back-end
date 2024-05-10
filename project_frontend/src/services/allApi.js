import { BASE_URL } from "./baseUrl"
import { commonAPI } from "./commonApi"



// request to register a user
  export const registerAPI =async(reqBody)=>{
    return await commonAPI('POST',`${BASE_URL}/User/register`,reqBody,"")
 } 
// request to login
export const loginAPI =async(reqBody)=>{
    return await commonAPI('POST',`${BASE_URL}/User/login`,reqBody,"")
 } 
 // add project
 export const AddProject =async(reqBody,reqHeader)=>{
  return await commonAPI('POST',`${BASE_URL}/add-project`,reqBody,reqHeader)
} 