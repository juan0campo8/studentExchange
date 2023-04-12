import React from "react";
import{Card, CardContent, CardMedia, Typography, Button} from "@mui/material";
import ShowItems from "./ItemData";


// This component will be used to return a list of items and present them to the user
  
const Items = ({ items }) => {
    
    const itemsList = items.length ? (
        items.map((item) => {
            return (
                <Card style={{ maxWidth: 345 }}>
                <CardMedia
                style={{ height: 0, paddingTop: '56.25%' }}
                image={item.imagePath}
                title={item.itemName}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {item.itemName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.itemDescription}
                </Typography>
                <Typography variant="h6" color="textPrimary" component="p">
                    {`Price: $${item.itemPrice}`}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="p">
                    {`Category: ${item.itemCategory}`}
                </Typography>
                </CardContent>
            </Card>
            );
        })
    ) : (
        <div className="container">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                <p style={{ fontSize: "4rem" }}>There are no items currently available. Check back later!</p>
            </div>
        </div>
        
    );
    return(
        <div className="itemsCollection">
            {itemsList}
        </div>
    );
};

export default Items;