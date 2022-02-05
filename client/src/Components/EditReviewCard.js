import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

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
        navigate('/');
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
        <div className="create_card">
        <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
            <CardContent align='center'>
                <Typography style={{fontFamily: "Courier"}}>
                    Edit Review
                </Typography>
                <br/>
                <Typography >
                    <form onSubmit={handleFormSubmit}>
                        <TextField
                          sx={{bgcolor: '#cfe8fc' }}
                          multiline
                          variant="filled"
                          type="text"
                          name="comment"
                          autoComplete="off"
                          value={comment}
                          label="Edit Review"
                          onChange={(e) => setComment(e.target.value)}
                        />
                        <br/><br/>
                        <Button color="primary" variant="outlined" type="submit">Update</Button>
                        <div>
                            {errors.map((err) => (
                            <li key={err}>{err}</li>
                            ))}
                        </div>
                    </form>            
                </Typography>
                <br/>
                <Typography>
                    <Button color="primary" variant="outlined" onClick={handleDeleteClick}>Delete Review</Button>
                </Typography>
            </CardContent>
        </Card>
      </div>
    )
}

export default EditReviewCard