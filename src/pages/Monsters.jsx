import Preview from "../components/Preview";
import Logout from "../components/Logout";
import { useEffect, useState } from "react";
import axios from "axios"


const Monsters = () => {
    const [monsters, setMonsters] = useState([]);

    const getMonsters = async () => {
        const res = await axios.get(
          "https://botw-compendium.herokuapp.com/api/v2/category/monsters"
        );
        const data = res.data.data;
        setMonsters(data);
      };
      
      useEffect(() => {
        getMonsters();
      }, []);
   
    
    return (
        <main className="monsters">
            <h1>MONSTERS</h1>
                {monsters.map((monster) => 
                <figure key={monster.id}>
                    <img src={monster.image} alt={monster.name}/>
                    <h2>{monster.name.toUpperCase()}</h2>
                    <p>{monster.description}</p>
                </figure>)}
            <Logout/>
        </main>
    )
}

export default Monsters;