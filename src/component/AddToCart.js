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
            itemName: item.Item_name,
            itemDescription: item.Item_description,
            itemPrice: item.Item_price,
            itemCategory: item.Item_category,
            imagePath: item.ImagePath
        }
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
          {isLoading ? 'Loading...' : 'Click me!'}
        </Button>
      );
}
export default AddToCart;