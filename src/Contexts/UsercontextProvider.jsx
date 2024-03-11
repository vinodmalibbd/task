import React, { createContext, useEffect, useState } from 'react'
const Usercontext=createContext();
const UsercontextProvider = ({children}) => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  useEffect(()=>{
    
    if(localStorage.getItem("username")){

      setUsername(localStorage.getItem("username"))
    }

  },[username])

  const addUser=({uname,pass})=>{

    setUsername(uname);
    setPassword(pass)
    localStorage.setItem("username",uname)

  }

  const removeUser=()=>{
    setUser({username:"",password:""});
 
  }
  return (
    <Usercontext.Provider value={{ username, addUser, removeUser }}>
      {children}
    </Usercontext.Provider >
  )
}

export {Usercontext,UsercontextProvider}
