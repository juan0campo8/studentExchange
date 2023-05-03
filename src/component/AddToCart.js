import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
 
const AddToCart = (item) => { 
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsLoading(true);
        const jsonObject ={
            itemName: item.item.Item_name,
            itemDescription: item.item.Item_description,
            itemPrice: item.item.Item_price,
            itemCategory: item.item.Item_category,
            imagePath: item.item.ImagePath
        }
        console.log(jsonObject);
        Axios({
            method:"PUT",
            url: "http://localhost:8080/users/put/toCart",
            data: {jsonObject},
            headers: {
                "Content-Type":"application/json"
            }
        }).then(response => {
            console.log(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            console.error(error);
            setIsLoading(false);
            navigate('/signin');
          });
      };
    
      return (
        <Button onClick={handleClick} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'AddToCart'}
        </Button>
      );
}
export default AddToCart;