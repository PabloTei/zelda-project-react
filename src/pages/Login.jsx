import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    return (
        <div>
            <input
            type="text"
            onChange={(ev) => setUser(ev.target.value)}
            ></input>
            <button
            onClick={() => {
                localStorage.setItem("user", user);
                navigate("/home")
            }}
            >Login</button>
        </div>
    )
}

export default Login;