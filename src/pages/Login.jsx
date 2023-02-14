import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    return (
        <div className="login">
            <h3>INTRODUCE TU NOMBRE</h3>
            <div className="button-input">
            <input
            type="text"
            onChange={(ev) => setUser(ev.target.value.toUpperCase())}
            ></input>
            {user !== null ?             <button
            onClick={() => {
                localStorage.setItem("user", user);
                navigate("/home")
            }}
            >Login</button> : <p>Por favor, introduce tu nombre</p>}
            </div>
        </div>
    )
}

export default Login;