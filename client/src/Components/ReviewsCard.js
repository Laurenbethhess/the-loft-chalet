import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import CreateResponse from "./CreateResponse";
import ResponseCard from "./ResponseCard";
import { Link } from "react-router-dom";

function ReviewsCard( { review, onLogin, user, responses, onAddResponse } ) {
    const review_id = review.id
    const reviewResponses = responses.filter(response => response.comment_rating.id === review_id)

    const renderResponses = reviewResponses.map(response => <ResponseCard user={user} response={response} key={response.id}/>)

    return (
        <div>
        <div className="card">
            <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
                <CardContent>
                    <Typography >
                        <Avatar sx={{ bgcolor: deepPurple[500] }} alt={review.user.first_name} src={review.user.first_name} />
                    </Typography>
                    <Typography variant="h5" component="div" style={{fontFamily: "Courier"}}>
                        {review.user.first_name}
                    </Typography>
                    <Typography >
                        <Rating name="read-only" value={review.rating} readOnly />
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="black" style={{fontFamily: "Courier"}}>
                        {review.date_updated}
                    </Typography>
                    <Typography variant="p" style={{fontFamily: "Courier", fontSize: 20}}>
                        <>"</>{review.comment}<>"</>
                    </Typography>
                    <br/><br/>
                    <Link style={{fontFamily: "Courier"}} to="/edit-review">Edit Review Here</Link>
                    <br/><br/>
                    <Typography >
                        {renderResponses}
                    </Typography>
                    <Typography >
                        <CreateResponse onLogin={onLogin} user={user} onAddResponse={onAddResponse} review={review} />
                    </Typography>
                </CardContent>
            </Card>
        </div>
        <div>
        <br/><br/>
        </div>
        </div>
    )
}

export default ReviewsCard