import { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom"

function SignUp () {
    const navigate= useNavigate();

    const [username,setUsername] =useState("");
    const [email,setEmail] =useState("");
    const [mobile,setMobile] =useState("");
    const [password,setPassword] =useState("");
    const [message,setMessage] =useState("");

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/signup",{
        method :"POST",
        headers : {
           "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            username,
            email,
            mobile,
            password
        })
    });
    const data = await response.text();

    if (response.ok) {
      navigate("/signin");
    } else {
    setMessage(data);
    }
    }




    return(
        <form className="signup-container" onSubmit= {handleSubmit}>
            <h2 className="signup-subtitle">Sign Up</h2>
            <label>Username</label>
            <input
             type="text"
             value={username}
             onChange= {(e)=> setUsername(e.target.value)} />
            <label>Email Id</label>
            <input
             type="email"
             value={email}
             onChange= {(e)=> setEmail(e.target.value)} />
            <label>Mobile No</label>
            <input
             type="text"
             value={mobile}
             onChange= {(e)=> setMobile(e.target.value)} />
            <label>Password</label>
            <input
             type="password"
             value={password}
             onChange= {(e)=> setPassword(e.target.value)} />
            <br></br>
            <button type="submit">Sign Up</button>  
            <p>{ message }</p>
        </form>

)};

export default SignUp;