import { useContext, useEffect } from "react"
import { Usercontext } from "../Contexts/UsercontextProvider"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { removeuser } from "../Redux/Userslice"

export const checkuser=()=>{
    const {username}=useContext(Usercontext)
  const nav=useNavigate()
  useEffect(()=>{
    if(username!==""){
      nav("/")
    }
  },[username])
}
export const checkuserInStore=()=>{
  const user=useSelector(state=>state.user)
  const nav=useNavigate()
  useEffect(()=>{
    if(user!==null){
      nav("/")
    }
  },[user])
  
}
export const getuserFromStore=()=>{
  const user=useSelector(state=>state.user)
  return user;
}
