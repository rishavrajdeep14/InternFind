import "./SignIn.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

function SignIn () {
    const navigate= useNavigate();
    useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
        localStorage.setItem("token", token);
        navigate("/");
    }
}, [navigate]);


    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response =  await fetch("https://internfind-backend.onrender.com/api/signin",{
        method :"POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
         console.log(data);

        if (response.ok) {
        navigate("/");
        } else {
        setMessage(data.message);
}
}
    return(
    <form 
    className="signin-container"
    onSubmit={ handleSubmit }>
        <h2 className="signin-subtitle">Login</h2>
        <label>Email Id</label>
        <input
         type="email"
         placeholder="enter email"
         value={ email }
         onChange = {(e) => setEmail(e.target.value)}
         ></input>
        <label>Password</label>
        <input
         type="password"
         placeholder="enter password"
         value={ password }
         onChange = {(e) => setPassword(e.target.value)}
         ></input>
        <button type="submit">Login</button>
        <button
    type="button"
    className="google-btn"
    onClick={() => {
        window.location.href = "https://internfind-backend.onrender.com/api/auth/google";
    }}
>
    <svg
        className="google-icon"
        viewBox="0 0 24 24"
        width="20"
        height="20"
    >
        <path
            fill="#4285F4"
            d="M21.35 12.23c0-.79-.07-1.55-.2-2.27H12v4.3h5.23a4.47 4.47 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.92-4.18 2.92-7.42z"
        />
        <path
            fill="#34A853"
            d="M12 21.7c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.74 9.74 0 0 0 12 21.7z"
        />
        <path
            fill="#FBBC05"
            d="M6.54 13.79a5.85 5.85 0 0 1 0-3.58V7.68H3.3a9.73 9.73 0 0 0 0 8.64l3.24-2.53z"
        />
        <path
            fill="#EA4335"
            d="M12 6.18c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.27 14.63 2.3 12 2.3a9.74 9.74 0 0 0-8.7 5.38l3.24 2.53C7.31 7.9 9.46 6.18 12 6.18z"
        />
    </svg>

    <span>Continue with Google</span>
</button>
        <p>{ message }</p>
    </form>

 );
}
export default SignIn;