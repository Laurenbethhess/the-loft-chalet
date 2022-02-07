import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Login from "./Login";
import { Link } from "react-router-dom";


function CreateReview( { user, onAddReview, property, onLogin } ) {
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const [property_id, setPropertyId] = useState(property.id)

    if (!user) return <Login onLogin={onLogin} />

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
            user_id: user.id,
            property_id: property_id,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then(newReview => {
                onAddReview(newReview)
                setComment("")
                setRating("")
                setPropertyId(property_id)
                navigate('/');
              })
          } else {
            r.json().then((err) => setErrors(err.errors));  
          }
        });
      }
  
    return (
          <div className="create_card">
            <Card sx={{ minWidth: 275, bgcolor: '#cfe8fc' }} style={{backgroundColor: "#B1DFB0"}}>
                <CardContent>
                    <Typography style={{fontSize: 20, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                        <p>You can only leave one review</p>
                        <p>To edit a review, go to <Link to="/edit-review">Edit Review</Link></p>
                    </Typography>       

                    <Typography >
                      <form onSubmit={handleSubmit}>
                        <TextField
                          sx={{bgcolor: '#cfe8fc' }}
                          multiline
                          variant="filled"
                          type="text"
                          name="comment"
                          autoComplete="off"
                          value={comment}
                          label="Review"
                          onChange={(e) => setComment(e.target.value)}
                        />
                        <Rating
                          required
                          name="simple-controlled"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        />
                        <Button type="submit">Submit</Button>
                        <div>
                            {errors.map((err) => (
                            <li key={err}>{err}</li>
                            ))}
                        </div>
                      </form>
                    </Typography>
                </CardContent>
            </Card>
          </div>
    )
}

export default CreateReview