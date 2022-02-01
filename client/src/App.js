import { useState, useEffect } from "react";
import './index.css'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login";

function App() {
  const [user, setUser] = useState(null);

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
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;