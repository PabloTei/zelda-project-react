import { NavLink } from "react-router-dom";
import Logout from "../components/Logout";
import Equipment from "./Equipment";
import Monsters from "./Monsters";

const Home = () => {
    return (
        <div>
            <h1>¡BIENVENIDX {localStorage.getItem("user")}!</h1>
            <NavLink to="monsters">Monsters</NavLink>
            <NavLink to="equipment">Equipment</NavLink>
            <Logout/>
        </div>
    )
}

export default Home;