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
                <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
                    <CardContent>
                        <Typography style={{fontFamily: "Courier"}} align='center' variant="h5" gutterBottom component="div">
                            Email:  LaurenBethHess@gmail.com
                        </Typography>
                        <Typography style={{fontFamily: "Courier"}} align='center' variant="h5" gutterBottom component="div">
                            Phone:  xxx-xxx-xxxx
                        </Typography>
                    </CardContent>
                </Card>
                <br/>
                <Typography style={{fontFamily: "Courier"}} align='center' variant="h4" gutterBottom component="div">
                    You can view a calendar of available dates <a href="https://calendar.google.com/calendar/u/0?cid=Nm1hZTNmbnZudXR1Ym9jdTI5dHAyZDdkczBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" target="_blank">here</a>.
                </Typography>
            </Box>
        </div>
    )
}

export default Contact