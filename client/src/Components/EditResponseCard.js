import { useState} from "react";
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function EditResponseCard( { response, onUpdateResponse, onDeleteResponse } ) {
    const [responseComment, setResponseComment] = useState(response.comment)
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    function handleDeleteClick() {
        fetch(`/response_to_comments/${response.id}`, {
          method: "DELETE",
        })
        onDeleteResponse(response.id);
        navigate('/');
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        fetch(`/response_to_comments/${response.id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment: responseComment
                }),
        })
        .then((r) => {
            if (r.ok) {
              r.json()
              .then(updatedResponse => {
                onUpdateResponse(updatedResponse)
                navigate('/');
                })
            } else {
              r.json().then((err) => setErrors(err.errors));  
            }
          })
        }

    return (
      <div>
        <div className="edit_card">
          <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
              <CardContent align='center'>
                  <Typography >
                      <form onSubmit={handleFormSubmit}>
                          <TextField
                            sx={{bgcolor: '#cfe8fc' }}
                            multiline
                            variant="filled"
                            type="text"
                            name="comment"
                            autoComplete="off"
                            value={responseComment}
                            label="Edit Response"
                            onChange={(e) => setResponseComment(e.target.value)}
                          />
                          <br/><br/>
                          <Button variant="outlined" type="submit">Update</Button>
                          <div>
                              {errors.map((err) => (
                              <li key={err}>{err}</li>
                              ))}
                          </div>
                      </form>            
                  </Typography>
                  <br/>
                  <Typography>
                      <Button variant="outlined" onClick={handleDeleteClick}>Delete Response</Button>
                  </Typography>
              </CardContent>
          </Card>
        </div>
        <br/>
      </div>
    )
}

export default EditResponseCard