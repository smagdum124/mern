import React from "react";
import { useState ,useEffect} from "react";
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    // protect the links when user direct access to the browser
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
          navigate('/')
        }
      },[])

    const handleLogin=async()=>{
        console.log(email,password)
        let result=await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result=await result.json();
        console.log(result)
        if(result.name){
localStorage.setItem("user",JSON.stringify(result))
navigate("/")
        }else{
            alert("please enter valid details")
        }
    }
  return (
    <div style={{ marginLeft: "35%" }}>
      <h1 className="txt">Login Page</h1>
      {/* <input
        className="input-box"
        type="text"
        name=""
        id=""
        placeholder="Enter Name"
      /> */}
      <input
        className="input-box"
        type="text"
        name=""
        id=""
        placeholder="Enter Email "
        onChange={(e)=>setEmail(e.target.value)} value={email}
      />
      <input
        className="input-box"
        type="Password"
        name=""
        id=""
        placeholder="Enter Password"
        onChange={(e)=>setPassword(e.target.value)} value={password}
      />
      <button className="btn" type="button" onClick={handleLogin}>
    Log in
      </button>
    </div>
  );
};

export default Login;
