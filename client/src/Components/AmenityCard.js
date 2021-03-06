import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function AmenityCard( { amenity } ) {

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
                            <Item elevation={4} style={{fontFamily: "Courier"}}>{amenity.name}:</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item elevation={4} style={{fontFamily: "Courier"}}>{amenity.description}</Item>
                        </Grid>
                    </Grid>
                </Box>
                <br/>
            </div>
    );
}

export default AmenityCard