import React, {Component} from "react";
import "../pages/Home.css";
import ShowItems from "../component/ItemData";
import Items from "../component/items";
import {Grid} from "@mui/material";
import Axios from "axios";




class Home extends Component{
    //Default state of this component with an empty list of items
    constructor(){
        super();
        this.state = {
            items : [],
            cart : []
        };
    };

    setUp = () => {
        let itemList = ShowItems();
        this.setState({
            items: itemList,
        });
        console.log("ram");
    }

    addToCart = (item) => {
        // create a copy of the current cart
        const cart = [...this.state.cart];
        // check if the selected item is already in the cart
        const index = cart.findIndex((cartItem) => cartItem.id === item.id);
        if (index >= 0) {
          // if item is already in the cart, increase its quantity by 1
          cart[index].qty += 1;
        } else {
          // if item is not in the cart, add it with quantity of 1
          cart.push({ ...item, qty: 1 });
        }
        // update the cart state
        this.setState({ cart });
      };
      
    addInformation = (item) =>{
        //Add logic to check for duplicate values, invalid inputs, missing inputs        
    
        const jsonObject ={
            itemName: item.itemName,
            itemDescription: item.itemDescription,
            itemPrice: item.itemPrice,
            itemCategory: item.itemCategory,
            imagePath: item.imagePath
        }
        Axios({
            method:"POST",
            url: "http://localhost:8080/add/item",
            data: {jsonObject},
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res =>{
            console.log(res.data.message);
        });
    }

    render(){
        return(
            <div className="Home"> 
                <ShowItems/>
            </div>
            
        );
    }
}
export default Home;