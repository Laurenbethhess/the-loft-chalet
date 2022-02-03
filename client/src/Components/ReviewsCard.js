import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';


function ReviewsCard( { review } ) {

    return (
        <div>
            <div className="username">
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
            <Avatar alt={review.user.first_name} src={review.user.avatar_url} />
        </div>
    )
}

export default ReviewsCard