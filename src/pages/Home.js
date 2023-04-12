import React, {Component} from "react";
import "../pages/Home.css";
import AddInformation from "../component/addInformation";
import Items from "../component/items";
import Axios from "axios";
import {Grid} from "@mui/material";
import UploadImage from "../component/fileUpload";

class Home extends Component{
    //Default state of this component with an empty list of items
    constructor(){
        super();
        this.state = {
            items : []
        };
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
              
                <Grid>
                    <Items items = {this.state.items} />
                </Grid>

                <AddInformation addInformation={this.addInformation} />
            </div>
        );
    }
}
export default Home;