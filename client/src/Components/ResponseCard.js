import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import CreateResponse from "./CreateResponse";

function ResponseCard( { response, review } ) {
    
    return (
        <div>
        <div className="card">
            <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#FEFA99"}}>
                <CardContent>
                    <Typography >
                        <Avatar sx={{ bgcolor: deepPurple[500] }} alt={review.user.first_name} src={review.user.first_name} />
                    </Typography>
                    <Typography variant="h5" component="div" style={{fontFamily: "Courier"}}>
                        {review.user.first_name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="black" style={{fontFamily: "Courier"}}>
                        {response.date_updated}
                    </Typography>
                    <Typography variant="body2" style={{fontFamily: "Courier"}}>
                        {response.comment}
                    </Typography>
                    <br/>
                </CardContent>
            </Card>
        </div>
        <div>
            <br/>
        </div>
        </div>
    )
}

export default ResponseCard