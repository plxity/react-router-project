import axios from 'axios';
export const FETCH_DATA ='fetch_post';
const ROOT_URL ='http://reduxblog.herokuapp.com/api';
const API_KEY ='?key=PLAXITY1234';
export const CREATE_POST ='create_post';
export const FETCH_ID ='fetch_id';
export const DELETE_POST ='delete_post';
export function fetchPost(){
    const request =axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return{
        type:FETCH_DATA,
        payload:request
    };
}
export function createPost(values, callback){
    const request =axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
    .then(()=>
        callback()
    );
    return {
        type:CREATE_POST,
        payload:request
    };
}
export function fetchidpost(id){
    const request =axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
        type:'FETCH_ID',
        payload:request
    };
}
export function deletePost(id,callback){
    const request =axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`,id)
    .then(()=>
    callback()
);
    return{
        type:'DELETE_POST',
        payload:id
    }
}