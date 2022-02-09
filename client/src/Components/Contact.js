import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Contact( {} ) {

    return (
        <div className="welcome">
            <Box sx={{ width: '100%', maxWidth: 1200 }}>
                <Typography style={{fontFamily: "Courier"}} align='center' variant="h3" component="div" gutterBottom>
                    Interested in staying at The Loft-Chalet?
                </Typography>
                <br/>
                <Typography style={{fontFamily: "Courier"}} align='center' variant="h4" gutterBottom component="div">
                    Please contact Lauren for details.
                </Typography>
                <br/>
                <div align='center'>
                <Box sx={{width: '50%', maxWidth: 1200 }}>
                    <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
                        <CardContent>
                            <Typography style={{fontFamily: "Courier"}} align='center' variant="h5" gutterBottom component="div">
                                Email:  Mavis@gmail.com
                            </Typography>
                            <Typography style={{fontFamily: "Courier"}} align='center' variant="h5" gutterBottom component="div">
                                Phone:  xxx-xxx-xxxx
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                </div>

                <br/>
            </Box>
        </div>
    )
}

export default Contact