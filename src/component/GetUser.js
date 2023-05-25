import React, {  useEffect, useState } from "react";
import Axios from "axios";

const getUser = () => {
    const [user, setUser] = useState('');

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
        {user} 
    )
}
export default getUser;