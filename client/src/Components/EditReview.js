import { useState, useEffect } from "react";
import EditReviewCard from "./EditReviewCard";
import Rating from '@mui/material/Rating';



function EditReview( {onUpdateReview, reviews, user_id} ) {


    const userReviews = reviews.filter(review => review.user.id === user_id)
    const userRenderedReviews = userReviews.map(review => <EditReviewCard review={review} key={review.id} onUpdateReview={onUpdateReview} />)

    return (
        <div>
            {userRenderedReviews}
        </div>

    )
}

export default EditReview