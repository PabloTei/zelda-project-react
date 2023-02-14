import { Navigate, useNavigate } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate()
    return (
        <button
        onClick={() => {
            localStorage.removeItem("user");
            navigate("/")
        }}
        >Logout</button>
    )
}

export default Logout;