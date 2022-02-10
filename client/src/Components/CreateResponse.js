import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Login from "./Login";
import { Link } from "react-router-dom";

function CreateResponse( { user, onAddResponse, review } ) {
    const [comment, setComment] = useState("")
    const [errors, setErrors] = useState([]);
    const [comment_rating_id, setCommentRatingId] = useState(review.id)

    if (!user) return <Link style={{fontFamily: "Courier"}} className="create_response" to="/login">Please Login to Respond to a Review</Link>

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/response_to_comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment: comment,
            user_id: user.id,
            comment_rating_id: comment_rating_id,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then(newResponse => {
                onAddResponse(newResponse)
                setComment("")
                setCommentRatingId(comment_rating_id)
              })
          } else {
            r.json().then((err) => setErrors(err.errors));  
          }
        });
      }
  
    return (
          <div className="create_response">
            <Card style={{backgroundColor: "#88D1D1"}}>
                <CardContent>
                    <Typography style={{fontSize: 15, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                      Respond to this review:
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
                          label="Response"
                          onChange={(e) => setComment(e.target.value)}
                        />
                        <Button variant="outlined" type="submit">Submit</Button>
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

export default CreateResponse