import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';

function EditReviewCard( { review, onUpdateReview, onDeleteReview } ) {
    const [comment, setComment] = useState(review.comment)
    const [rating, setRating] = useState(review.rating)
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleUpdateReview(updatedReview) {
        onUpdateReview(updatedReview)
    }

    function handleDeleteClick() {
        fetch(`https://the-loft-chalet.herokuapp.com/comment_ratings/${review.id}`, {
        // fetch(`http://localhost:3000/comment_ratings/${review.id}`, {
          method: "DELETE",
        })
        onDeleteReview(review.id)
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        // fetch(`http://localhost:3000/comment_ratings/${review.id}`, {
        fetch(`https://the-loft-chalet.herokuapp.com/comment_ratings/${review.id}`, {
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
            <br/>
            <button onClick={handleDeleteClick}>Delete Review</button>
            <br/>
            <>_____________________________________________</>
        </div>
    )
}

export default EditReviewCard