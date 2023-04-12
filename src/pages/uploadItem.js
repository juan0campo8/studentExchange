import React, {Component} from "react";
import "../pages/Home.css";
import addInformation from "../component/Navigation/addInformation";
import Axios from "axios";

class uploadItem extends Component{
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
            <div className="uploadItem">
              
                <addInformation addInformation={this.addInformation} />
            </div>
        );
    }
}
export default uploadItem;