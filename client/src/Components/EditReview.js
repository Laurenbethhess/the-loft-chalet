import React from "react";
import EditReviewCard from "./EditReviewCard";
import Login from "./Login";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';



function EditReview( {onUpdateReview, reviews, user, onDeleteReview, onLogin, onSetAverageRating, onSetPropertyRating, onSetResponses, onDeleteResponse } ) {
    if (!user) return <Login onLogin={onLogin} />

    const user_id = user.id
    const userReviews = reviews.filter(review => review.user.id === user_id)
    const userRenderedReviews = userReviews.map(review => <EditReviewCard review={review} key={review.id} onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview} onSetAverageRating={onSetAverageRating} onSetPropertyRating={onSetPropertyRating} onSetResponses={onSetResponses} onDeleteResponse={onDeleteResponse}/>)

    return (
        <div >
            <div className="login">
                <Card sx={{ minWidth: 275, bgcolor: '#cfe8fc' }} style={{backgroundColor: "#B1DFB0"}}>
                    <CardContent>
                        <Typography sx={{ minWidth: 275, bgcolor: '#cfe8fc' }} style={{backgroundColor: "#B1DFB0"}} style={{fontSize: 20, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                        If you've left a review, you can edit it here.
                        </Typography>       
                    </CardContent>
                </Card>
            </div>
            <br/>
            {userRenderedReviews}
      </div>


    )
}

export default EditReview