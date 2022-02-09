import React from "react";
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import { Link } from "react-router-dom";


function ResponseCard( { response, review} ) {
    
    return (
        <div>
            <div className="card">
                <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#FEFA99"}}>
                    <CardContent>
                        <Typography >
                            <Avatar sx={{ bgcolor: deepPurple[500] }} alt={response.user.first_name} src={response.user.first_name} />
                        </Typography>
                        <Typography variant="h5" component="div" style={{fontFamily: "Courier"}}>
                            {response.user.first_name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="black" style={{fontFamily: "Courier"}}>
                            {response.date_updated}
                        </Typography>
                        <Typography variant="body2" style={{fontFamily: "Courier"}}>
                            {response.comment}
                        </Typography>
                        <Link to="/edit-response">Edit Response Here</Link>
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