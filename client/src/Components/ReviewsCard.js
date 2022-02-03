import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function ReviewsCard( { review } ) {

    return (
        <div className="card">
            <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
                <CardContent>
                    <Typography >
                        <Avatar alt={review.user.first_name} src={review.user.avatar_url} />
                    </Typography>
                    <Typography variant="h5" component="div" style={{fontFamily: "Courier"}}>
                        {review.user.first_name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="black" style={{fontFamily: "Courier"}}>
                        {review.date_updated}
                    </Typography>
                    <Typography variant="body2" style={{fontFamily: "Courier"}}>
                        {review.comment}
                    </Typography>
                </CardContent>
            </Card>
            



            {/* <div className="username">
                {review.user.first_name}
            </div>
            <div className="date">
                {review.date_updated}
            </div>
            <div className="user_rating">
                <Rating name="read-only" value={review.rating} readOnly />
            </div>
            <div className="user_review">
            <>"</>{review.comment}<>"</>
            </div>
            <Avatar alt={review.user.first_name} src={review.user.avatar_url} /> */}
        </div>
    )
}

export default ReviewsCard