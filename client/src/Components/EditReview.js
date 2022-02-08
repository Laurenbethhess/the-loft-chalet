import React from "react";
import EditReviewCard from "./EditReviewCard";
import Login from "./Login";

function EditReview( {onUpdateReview, reviews, user, onDeleteReview, onLogin, onSetAverageRating, onSetPropertyRating } ) {
    if (!user) return <Login onLogin={onLogin} />

    const user_id = user.id
    const userReviews = reviews.filter(review => review.user.id === user_id)
    const userRenderedReviews = userReviews.map(review => <EditReviewCard review={review} key={review.id} onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview} onSetAverageRating={onSetAverageRating} onSetPropertyRating={onSetPropertyRating}/>)

    return (
        <div>
            {userRenderedReviews}
        </div>
    )
}

export default EditReview