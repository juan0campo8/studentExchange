import React from "react";
import{Card, CardContent, CardMedia, Typography, Grid, Button} from "@mui/material";

// This component will be used to return a list of items and present them to the user
  
const Items = ({ items }) => {
    
    const itemsList = items.length ? (
        items.map((item) => {
            return (
                <Grid item>
                    <Card style={{ maxWidth: 345 }}>
                        <CardMedia
                        style={{ height: 0, paddingTop: '56.25%' }}
                        image={item.Image_Path}
                        title={item.Item_name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {item.Item_name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        {item.Item_description}
                        </Typography>
                        <Typography variant="h6" color="textPrimary" component="p">
                        {`Price: $${item.Item_price}`}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            {`Category: ${item.Item_category}`}
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>

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
            <Grid container spacing={2}>
                {itemsList}        
            </Grid>
        </div>
    );
};

export default Items;


