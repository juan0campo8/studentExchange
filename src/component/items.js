import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import "./items.css";
import AddToCart from "./addToCart";


const images = {};
function importAll(r) {
  r.keys().forEach(key => images[key] = r(key));
}

importAll(require.context('./itemImages', false, /\.(png|jpe?g|svg)$/));

const Items = ({ items }) => {
    
    const itemsList = items.length ? (
        <Grid container spacing={4} direction="row" >
            {items.map((item) => {
                let imagep = "./" + item.Image_Path;

                return (
                    <Grid item xs={3} key={item.id}>
                        <Card variant="outlined" style={{ width: "100%", height: "100%" }} >
                            <CardMedia
                                style={{ height: 0, paddingTop: '56.25%' }}
                                image={images[imagep]}
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
                                <AddToCart/>
                            </CardContent>
                        </Card>
                    </Grid>
                );
            })}
        </Grid>
    ) : (
        <div className="center"><p className="no-items-text">No items available. Come back later!</p></div>
    );

    return (
        <div className="itemsCollection ">
            {itemsList}
        </div>
    );
};

export default Items;
