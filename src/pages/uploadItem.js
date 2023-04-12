import React, {Component} from "react";
import "../pages/Home.css";
import AddInformation from "../component/addInformation";
import Axios from "axios";
import { Container } from "react-bootstrap";

class UploadItem extends Component{
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
            <Container maxWidth="lg">
                <AddInformation addInformation={this.addInformation} />
            </Container>
            </div>
        );
    }
}
export default UploadItem;