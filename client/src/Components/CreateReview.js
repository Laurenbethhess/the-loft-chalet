import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';


function CreateReview( { user_id, onAddReview, property_id } ) {
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")
    const [user, setUserId] = useState(user_id)
    const [property, setPropertyId] = useState(property_id)
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://the-loft-chalet.herokuapp.com/comment_ratings", {
        // fetch("http://localhost:3000/comment_ratings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: comment,
            rating: rating,
            user_id: user,
            property_id: property
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then(newReview => {
                onAddReview(newReview)
                setComment("")
                setRating("")
                setPropertyId(property_id)
                setUserId(user_id)
                navigate('/');
              })
          } else {
            r.json().then((err) => setErrors(err.errors));  
          }
        });
      }
  
    return (
        <div>
          <br/>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Submit</button>
                <div>
                    {errors.map((err) => (
                    <li key={err}>{err}</li>
                    ))}
                </div>
            </form>

        </div>
    )
}

export default CreateReview