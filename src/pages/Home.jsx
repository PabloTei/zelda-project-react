import { NavLink } from "react-router-dom";
import Logout from "../components/Logout";
import "./Home.css";


const Home = () => {
    return (
        <div className="home">
            <h1>¡BIENVENIDX {localStorage.getItem("user")}!</h1>
            <div className="links">
            <NavLink to="monsters">Monsters</NavLink>
            <NavLink to="equipment">Equipment</NavLink>
            </div>
            <div className="logout">
            <Logout/>
            </div>
        </div>
    )
}

export default Home;