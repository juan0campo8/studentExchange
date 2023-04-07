import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import Axios from "axios";

class addInformation extends Component{
    // Create a local react state of the item with it's desired properties(which we can add later)
    constructor(){
        super();
        this.state ={
            itemName: "",
            itemDescription: "",
            itemPrice: null,
            itemCategory: "",
            imagePath: "",
        };
    }


    // handleChange Functions: All handleChange functions are made to update the React states of
    // each property. It will update automatically on "event", which in this case is when a user
    // types something in the input boxes

    handleChangeName = (event) => {
        this.setState({
            itemName: event.target.value
        });
    };

    handleChangeDescription = (event) =>{
        this.setState({
            itemDescription: event.target.value
        });
    };

    handleChangePrice = (event) =>{
        this.setState({
            itemPrice : event.target.value
        });
    };

    handleChangeCategory = (event) =>{
        this.setState({
            itemCategory : event.target.value
        });
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        
        this.props.addInformation(this.state);
        this.setState({
            itemName: "",
            itemDescription: "",
            itemPrice: null,
            imagePath: "",
        });
    }

}