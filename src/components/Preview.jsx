import { useNavigate } from "react-router-dom"


const Preview = () => {
    const navigate = useNavigate()
    return (
            <button
            onClick={navigate("home")}>Atrás</button>
    )
}

export default Preview;