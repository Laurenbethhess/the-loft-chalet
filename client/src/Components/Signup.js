import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'


function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [avatar_url, setAvatar_url] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        first_name: firstname,
        last_name: lastname,
        email: email,
        // avatar_url: avatar_url
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate('/')
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return (
        <div>
              <Card align='center' sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
              <Typography style={{fontSize: 20, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                Create an account
              </Typography> 
                
                <CardContent align='center'>
                    <Typography >
                      <form onSubmit={handleSubmit}>
                        <TextField
                          sx={{bgcolor: '#cfe8fc' }}
                          required
                          variant="filled"
                          type="text"
                          name="comment"
                          autoComplete="off"
                          value={username}
                          label="Username"
                          onChange={(e) => setUsername(e.target.value)}
                          /><br/>
                        <TextField
                          sx={{bgcolor: '#cfe8fc' }}
                          required
                          variant="filled"
                          type="password"
                          name="comment"
                          autoComplete="off"
                          value={password}
                          label="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          /><br/>
                        <TextField
                          sx={{bgcolor: '#cfe8fc' }}
                          required
                          variant="filled"
                          type="text"
                          name="comment"
                          autoComplete="off"
                          value={firstname}
                          label="First Name"
                          onChange={(e) => setFirstName(e.target.value)}
                          /><br/>
                        <TextField
                          sx={{bgcolor: '#cfe8fc' }}
                          required
                          variant="filled"
                          type="text"
                          name="comment"
                          autoComplete="off"
                          value={lastname}
                          label="Last Name"
                          onChange={(e) => setLastName(e.target.value)}
                          /><br/>
                        <TextField
                          sx={{bgcolor: '#cfe8fc' }}
                          required
                          variant="filled"
                          type="text"
                          name="comment"
                          autoComplete="off"
                          value={email}
                          label="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          /><br/>
                        {/* <TextField
                          sx={{bgcolor: '#cfe8fc' }}
                          variant="filled"
                          type="text"
                          name="avatar_url"
                          autoComplete="off"
                          value={avatar_url}
                          label="Avatar URL"
                          onChange={(e) => setAvatar_url(e.target.value)}
                          /><br/> */}
                        <Button variant="outlined" type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button><br/>
                        <div>
                            {errors.map((err) => (
                            <li key={err}>{err}</li>
                            ))}
                        </div>
                      </form><br/>
                      <div>
                        {errors.map((err) => (
                          <li key={err}>{err}</li>
                        ))}
                      </div>
                    </Typography>
                </CardContent>
              </Card>
        </div>
    )
}

export default Signup