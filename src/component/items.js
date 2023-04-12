import React from "react";
import{Card, CardContent, CardMedia, Typography, Button} from "@mui/material";

// This component will be used to return a list of items and present them to the user

const Items = ({items}) =>{
    items.map((item) => {
        return (
            <Card>
            <CardMedia component="img" image={item.image} alt={item.name} height="200" />
            <CardContent>
            <Typography variant="h5" component="h2">
                {item.itemName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {item.itemDescription}
            </Typography>
            <Typography variant="h6" color="textSecondary">
                ${item.itemPrice}
            </Typography>
            <Button variant="contained" color="primary">
                Add to cart
            </Button>
            </CardContent>
            </Card>
          );
    })
}
export default Items;