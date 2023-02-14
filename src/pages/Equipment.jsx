import { useState, useEffect } from "react";
import Logout from "../components/Logout";
import axios from "axios"


const Equipment = () => {
    const [objects, setObjects] = useState([]);

    const getEquipment = async() => {
        const res = await axios.get(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`);
        const data = res.data.data;
        setObjects(data);
    };

    useEffect(() => {
        getEquipment();
    }, []);

    return (
        <main className="equipment">
            <h1>EQUIPMENT</h1>
                {objects.map((object) => 
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