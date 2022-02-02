import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';


function ReviewsCard( { review } ) {

    return (
        <div>
            <p>On {review.date_created}, {review.user.first_name} said <>"</>{review.comment}<>"</>  </p>
            <p><></><></><></>Last Updated: {review.date_updated}</p>
            <p><Rating name="read-only" value={review.rating} readOnly /></p>
            <>___________________________________________________</>
        </div>
    )
}

export default ReviewsCard