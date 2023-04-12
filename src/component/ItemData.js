import React, {  useEffect, useState } from "react";
import Axios from "axios";
 
const ShowItems = () => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        async function fetchData() {
            try{
                const res = await Axios.get('http://localhost:8080/get/items');
                setItems(JSON.stringify(res.data));
                console.log(JSON.stringify(res.data));
            } catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return items
}
export default ShowItems;