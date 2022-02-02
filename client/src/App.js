import { useState, useEffect } from "react";
import './index.css'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Photos from "./Components/Photos"

function App() {
  const [user, setUser] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://the-loft-chalet.herokuapp.com/photos')
    .then(r => r.json())
    .then(photos => setPhotos(photos))
  }, [])


  useEffect(() => {
  // auto-login
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

if (!user) return <Login onLogin={setUser} />

const user_id = user.id

  return (
    <div className="App">
      <Nav user={user} onSetUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home user={user} />}/>
        <Route path="/contact" element={<Contact user={user} />}/>
        <Route path="/photos" element={<Photos user={user} photos={photos} />}/>
      </Routes>

    </div>
  );
}

export default App;