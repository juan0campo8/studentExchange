import React, { Component } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import Axios from "axios";

const categories = [
    {
        value: "Bruh",
        label: "S",
    }
];

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
    render(){
        return(
            <div>
                <TextField
                    fullWidth
                    label = "Required"
                    variant = "outlined"
                    helperText="Item Name"
                    onChange = {this.handleChangeName}
                    value = {this.state.itemName}
                />
                <br></br>
                <TextField
                    label = "Required"
                    variant="outlined"
                    helperText="Item Price"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.handleChangePrice}
                    value={this.state.itemPrice}
                />
                <TextField
                    select
                    label="Select"
                    defaultValue="Bruh"
                    helperText="Please select your category"
                    onChange={this.handleChangeCategory}
                    value={this.state.itemCategory}
                >
                    {categories.map((option) => (
                        <MenuItem key={option.value}
                        value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <br></br>
                <TextField
                    label = "Required"
                    variant="outlined"
                    multiline
                    maxRows={5}
                    helperText="Item Description"
                    onChange={this.state.itemDescription}
                    value={this.state.itemDescription}
                />
            </div>
        );
    }

}

export default addInformation;