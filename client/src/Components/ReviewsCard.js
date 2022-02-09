import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { deepPurple } from '@mui/material/colors';
import CreateResponse from "./CreateResponse";
import ResponseCard from "./ResponseCard";

function ReviewsCard( { review, onLogin, user } ) {
    const [responses, setResponses] = useState([])

    function handleAddResponse(newResponse) {
        setResponses([...responses, newResponse])
      }
      
    useEffect(() => {
        fetch(`/comment_ratings/${review.id}`)
        .then(r => r.json())
        .then(comment_ratings => setResponses(comment_ratings.response_to_comments))
      }, [])

    const renderResponses = responses.map(response => <ResponseCard user={user} response={response} key={response.id} review={review} />)

    
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
                    <Typography sx={{ mb: 1.5 }} color="black" style={{fontFamily: "Courier"}}>
                        {review.date_updated}
                    </Typography>
                    <Typography variant="body2" style={{fontFamily: "Courier"}}>
                        {review.comment}
                    </Typography>
                    <br/>
                    <Typography >
                        <Rating name="read-only" value={review.rating} readOnly />
                    </Typography>
                    <Typography >
                        {renderResponses}
                    </Typography>
                    <Typography >
                    <CreateResponse onLogin={onLogin} user={user} onAddResponse={handleAddResponse} review={review} />
                    </Typography>
                </CardContent>
            </Card>
        </div>
        <div>
        <br/>
            
            <br/>
            
        </div>
        </div>
    )
}

export default ReviewsCard