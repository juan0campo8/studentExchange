import React, {Component} from "react";
import "../pages/Home.css";
import ShowItems from "../component/ItemData";
import Items from "../component/items";
import {Card, CardContent, CardMedia, Typography,Button, Container, Grid} from "@mui/material";
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
             <Items items = {ShowItems} />
                    <br></br>
                <Grid container spacing={4}>
                    
                <Grid item>
                <Card style={{ maxWidth: 345 }}>
                <CardMedia
                style={{ height: 0, paddingTop: '56.25%' }}
                image={require('C:/Users/adria/student-exchange/student-exchange/src/pages/itemImages/fryer.jpg')}
                title={"Ninja Air Fryer"}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {"Ninja Air Fryer"}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {"Lightly used, 4 quart capacity, original packaging included "}
                </Typography>
                <Typography variant="h6" color="textPrimary" component="p">
                    {`Price: $${70}`}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">
                    {`Category: ${"Kitchen"}`}
                </Typography>
                </CardContent>
                </Card>
                </Grid>
                <Grid item>
                    <Card style={{ maxWidth: 345 }}>
                <CardMedia
                style={{ height: 0, paddingTop: '56.25%' }}
                image={require('C:/Users/adria/student-exchange/student-exchange/src/pages/itemImages/trash.jpg')}
                title={"Smart Trash Can"}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {"Smart Trash Can"}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {"Like new, 2.5 gallon capacity, original packaging not included "}
                </Typography>
                <Typography variant="h6" color="textPrimary" component="p">
                    {`Price: $${30}`}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">
                    {`Category: ${"Kitchen"}`}
                </Typography>
                </CardContent>
                </Card>
                </Grid>
                </Grid>
                
            </div>
        );
    }
}
export default Home;