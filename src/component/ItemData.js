import React, {  useEffect, useState } from "react";
import Items from "../component/items";
import Axios from "axios";
 
const ShowItems = () => {
    const [items, setItems] = useState('');

    useEffect( () => {
        async function fetchData() {
            try{
                const res = await Axios.get('http://localhost:8080/get/items');
                console.log(JSON.stringify(res.data));
                setItems(res.data);
            } catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);
    return(
        <Items items = {items}/> 
    )
}
export default ShowItems;