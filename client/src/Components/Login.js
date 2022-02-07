import { useState } from "react"
import Signup from "./Signup"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';






function Login({ onLogin, user }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true);






  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://the-loft-chalet.herokuapp.com/login", {
    // fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user)
        })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="create_card">
    {showLogin ? (
      <div>
        <Card align='center' sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
          <p>Please Login for Access to Reviews</p>       
          <CardContent align='center'>
            <Typography >
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{bgcolor: '#cfe8fc' }}
                  variant="filled"
                  type="text"
                  id="username"
                  autoComplete="off"
                  label="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                /><br/>
                <TextField
                  sx={{bgcolor: '#cfe8fc' }}
                  variant="filled" 
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <Button type="submit">
                    {isLoading ? "Loading..." : "Login"}
                </Button>
                <div>
                    {errors.map((err) => (
                      <span key={err}>{err}</span>
                    ))}
                </div>
              </form>            
            </Typography>
            <Typography>
              Don't have an account? &nbsp;
              <Button onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </Typography>
          </CardContent>
        </Card>
    </div>
    ) : (
      <div>
        <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
                <CardContent>
                    <Typography >
                      <Signup onLogin={onLogin} />
                      Already have an account? &nbsp;
                      <Button onClick={() => setShowLogin(true)}>
                        Log In
                    </Button>
                    </Typography>
                </CardContent>
            </Card>
      </div>
    )}
  </div>
  );
}

export default Login;
