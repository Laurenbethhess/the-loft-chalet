import { useState, useEffect } from "react";
import EditReviewCard from "./EditReviewCard";

function EditReview( {onUpdateReview, reviews, user, onDeleteReview} ) {
    const user_id = user.id
    const userReviews = reviews.filter(review => review.user.id === user_id)
    const userRenderedReviews = userReviews.map(review => <EditReviewCard review={review} key={review.id} onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview} />)

    return (
        <div>
            {userRenderedReviews}
        </div>

    )
}

export default EditReview