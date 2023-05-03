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
            items : []
        };
    };

    setUp = () => {
        let itemList = ShowItems();
        this.setState({
            items: itemList,
        });
        console.log("ram");
    }

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