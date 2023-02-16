import { useState, useEffect } from "react";
import "./Equipment.css"
import Logout from "../components/Logout";
import axios from "axios"


const Equipment = () => {
    const [objects, setObjects] = useState([]);
    const [filter, setFilter] = useState([]);

    const getEquipment = async() => {
        const res = await axios.get(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`);
        const data = res.data.data;
        setObjects(data);
        setFilter(data);
    };

    useEffect(() => {
        getEquipment();
    }, []);

    const filterFunction = (value) => {
        const filter = objects.filter((object) => object.name.includes(value))
        setFilter(filter)
    }

    return (
        <main className="equipment">
            <h1>EQUIPMENT</h1>
            <input
            type="text"
            onChange={(ev) => {
                filterFunction(ev.target.value)
            }}
            />
                {filter.map((object) => 
                <figure key={object.id}>
                    <img src={object.image} alt={object.name}/>
                    <h2>{object.name.toUpperCase()}</h2>
                    <p>{object.description}</p>
                </figure>)}
            <Logout/>
        </main>
    )
}

export default Equipment;