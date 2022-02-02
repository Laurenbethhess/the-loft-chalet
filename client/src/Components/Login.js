import { useState, useEffect } from "react"
import Signup from "./Signup"
import { useNavigate } from 'react-router-dom'

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    // fetch("https://the-loft-chalet.herokuapp.com/login", {
    fetch("http://localhost:3000/login", {
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
          navigate('/')
        })
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      {showLogin ? (
        <div>
          <form onSubmit={handleSubmit}>
          <h1>Welcome to The Loft-Chalet!</h1>
          <h2>Please Login</h2>
            <div>
              <input 
                type="text"
                id="username"
                autoComplete="off"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="password"
                id="password"
                autoComplete="current-password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit">
                  {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
            <div>
                {errors.map((err) => (
                  <span key={err}>{err}</span>
                ))}
            </div>
            <div>
              <p>
                Don't have an account? &nbsp;
                <button onClick={() => setShowLogin(false)}>
                  Sign Up
                </button>
              </p>
            </div> 
          </form>
        </div>
      ) : (
        <div>
          <Signup onLogin={onLogin} />
          <br />
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default Login;
