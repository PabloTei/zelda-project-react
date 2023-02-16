import Preview from "../components/Preview";
import "./Monsters.css"
import Logout from "../components/Logout";
import { useEffect, useState } from "react";
import axios from "axios"


const Monsters = () => {
    const [monsters, setMonsters] = useState([]);
    const [filterMonsters, setFilterMonsters] = useState([]);

    const getMonsters = async () => {
        const res = await axios.get(
          "https://botw-compendium.herokuapp.com/api/v2/category/monsters"
        );
        const data = res.data.data;
        setMonsters(data);
        setFilterMonsters(data);
      };
      
      useEffect(() => {
        getMonsters();
      }, []);

      const filterMonsters1 = (value) => {
        const arrayFilter = monsters.filter((monster) => monster.name.includes(value));
        setFilterMonsters(arrayFilter);
      }
   
    
    return (
        <main className="monsters">
            <h1 className="titulo-monsters">MONSTERS</h1>
            <input
              type="text"
              onChange={(ev) => {
                filterMonsters1(ev.target.value)
              }}
            />
                {filterMonsters.map((monster) => 
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