import { BaseUrl } from './BaseUrl'

// Get Api start here
export const GetApi = async (link) => {
    try{
    const url = `${BaseUrl}/${link}`
    const options = {
        method:"GET",
        headers:{
            "Content-type": "application/json"
        }
    }
    const data = await fetch(url,options)
    const response = await data.json();
    return response;
    }catch(err){
        console.log(err)
    }
}
// Get Api end here

// Post Api start here
export const PostApi = async (link,payload) => {
    try{
        const url = `${BaseUrl}/${link}`;
        const options = {
            method:"POST",
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(payload)
        }
        const data = await fetch(url,options);
        const response = await data.json();
        return response;
    }catch(err){
        console.log(err)
    }
}
// Post Api end here

// Delete Api start here
export const DeleteApi = async (link,id) => {
    try{
        const url = `${BaseUrl}/${link}/${id}`;
        const options = {
            method:"DELETE",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }
        const data = await fetch(url,options);
        const response = await data.json();
        return response;
    }catch(err){
        console.log(err)
    }
}
// Delete Api start here

// Put Api start here
export const PutApi = async (link,payload,id) => {
    try{
        const url = `${BaseUrl}/${link}/${id}`;
        const options = {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
               },
            body: JSON.stringify(payload)
        }
        const data = await fetch(url,options);
        const response = await data.json();
        return response;
    }catch(err){
        console.log(err)
    }
}
// Put Api end here