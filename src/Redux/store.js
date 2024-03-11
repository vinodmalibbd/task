import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Userslice, { setuser } from "./Userslice";


export const  setUserToLocalStorage=(userdata)=>(dispatch)=>{
    dispatch(setuser(userdata))
    localStorage.setItem("user",JSON.stringify(userdata))
}

const LoadfromLocalstorage=()=>(dispatch)=>{
    const user=localStorage.getItem("user")
    if(user){
        dispatch(setuser(JSON.parse(user)))
    }
}
export const store=configureStore({
    reducer:Userslice
})
store.dispatch(LoadfromLocalstorage())

