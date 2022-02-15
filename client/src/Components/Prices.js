import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function Prices( { property } ) {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: "black",
        fontWeight: "bold",
      }));
      
    return (
            <div style={{paddingTop: 10, backgroundColor: '#cfe8fc'}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} className="card">
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>Winter Weekend Price:</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>${property.winter_weekend_price}</Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="card">
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>Winter Weekday Price:</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>${property.winter_weekday_price}</Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="card">
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>Spring Weekend Price:</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>${property.spring_weekend_price}</Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="card">
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>Spring Weekday Price:</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>${property.spring_weekday_price}</Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="card">    
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>Summer Weekend Price:</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>${property.summer_weekend_price}</Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="card">
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>Summer Weekday Price:</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>${property.summer_weekday_price}</Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="card">
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>Fall Weekend Price:</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>${property.fall_weekend_price}</Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className="card">
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>Fall Weekday Price:</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>${property.fall_weekday_price}</Item>
                        </Grid>
                    </Grid>
                </Box>
                <br/>
            </div>
    );
}

export default Prices