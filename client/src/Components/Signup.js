import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar_url, setAvatar_url] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    fetch("https://the-loft-chalet.herokuapp.com/users", {
    // fetch("http://localhost:3000/users", {
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
        avatar_url: avatar_url
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return (
        <div>
              <Card align='center' sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
                Create an account
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
                        <TextField
                          sx={{bgcolor: '#cfe8fc' }}
                          variant="filled"
                          type="text"
                          name="comment"
                          autoComplete="off"
                          value={avatar_url}
                          label="Avatar URL"
                          onChange={(e) => setAvatar_url(e.target.value)}
                          /><br/>
                        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button><br/>
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





        {/* <form onSubmit={handleSubmit}>
            <h2>Please Sign In</h2>
            <div>
              <input 
                type="text"
                placeholder="username"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="password"
                placeholder="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            <div>
              <input 
                type="text"
                placeholder="first name"
                id="first_name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="text"
                placeholder="last name"
                id="last_name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="text"
                placeholder="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="text"
                placeholder="avatar_url"
                id="avatar"
                value={avatar_url}
                onChange={(e) => setAvatar_url(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">
                  {isLoading ? "Loading..." : "Sign Up"}
              </button>
            </div>
            <div>
                {errors.map((err) => (
                  <li key={err}>{err}</li>
                ))}
            </div>
          </form> */}


        </div>


    )
}

export default Signup