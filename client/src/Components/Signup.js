import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Signup({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar_url, setAvatar_url] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);

    fetch("https://the-loft-chalet.herokuapp.com/users", {
    // fetch("http://localhost:4000/users", {
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
        navigate('/')
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

    return (
        <div>
        <form onSubmit={handleSubmit}>
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
          </form>
        </div>
    )
}

export default Signup