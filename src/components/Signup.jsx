import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate('/')
    }
  })

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result))
    navigate("/");
  };
  return (
    <div style={{ marginLeft: "35%" }}>
      <h1 className="txt">Register Page</h1>
      <input
        className="input-box"
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="input-box"
        type="text"
        name=""
        id=""
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email "
      />
      <input
        className="input-box"
        type="Password"
        name=""
        value={password}
        id=""
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button className="btn" type="button" onClick={collectData}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
