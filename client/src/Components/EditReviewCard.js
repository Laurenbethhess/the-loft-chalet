import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';



function EditReviewCard( { review, onUpdateReview } ) {
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleUpdateReview(updatedReview) {
        onUpdateReview(updatedReview)
    }

    function handleFormSubmit(e) {
        e.preventDefault();
    
        fetch(`http://localhost:3000/comment_ratings/${review.id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: comment,
                rating: rating
                }),
        })
        .then((r) => {
            if (r.ok) {
              r.json().then(updatedReview => {
                handleUpdateReview(updatedReview)
                setComment("")
                setRating("")
                navigate('/');
                })
            } else {
              r.json().then((err) => setErrors(err.errors));  
            }
          })
        }


    return (
        <div>
            <br/>
            {review.comment}
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="comment"
                    autoComplete="off"
                    value={comment}
                    placeholder="review"
                    onChange={(e) => setComment(e.target.value)}
                />
                <br/>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
                <br/>
                <button type="submit">Update</button>
                <div>
                    {errors.map((err) => (
                    <li key={err}>{err}</li>
                    ))}
                </div>
            </form>
            <>_____________________________________________</>
        </div>
    )
}

export default EditReviewCard