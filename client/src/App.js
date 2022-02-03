import { useState, useEffect } from "react";
import './index.css'
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Photos from "./Components/Photos"
import Amenity from "./Components/Amenity";
import CreateReview from "./Components/CreateReview";
import EditReview from "./Components/EditReview";

function App() {
  const [user, setUser] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [property, setProperty] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/photos')
    // fetch('https://the-loft-chalet.herokuapp.com/photos')
    .then(r => r.json())
    .then(photos => setPhotos(photos))
  }, [])

  useEffect(() => {
    // fetch('https://the-loft-chalet.herokuapp.com/comment_ratings')
    fetch('http://localhost:3000/comment_ratings')
    .then(r => r.json())
    .then(reviews => setReviews(reviews))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/properties/1')
    // fetch('https://the-loft-chalet.herokuapp.com/properties/1')
    .then(r => r.json())
    .then(property => setProperty(property))
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

function handleAddReview(newReview) {
  setReviews([...reviews, newReview])
}

function handleUpdateReview(updatedReviewObj) {
  const updatedReviews = reviews.map(review => {
    if (review.id === updatedReviewObj.id) {
      return updatedReviewObj;
    } else {
      return review;
    }
  });
  setReviews(updatedReviews)
}

function handleDeleteReview(id) {
  const finalReviews = reviews.filter(review => review.id !== id)
  setReviews(finalReviews)
}


  return (
    <div className="App">
      <Nav user={user} onSetUser={setUser} property={property} reviews={reviews}/>
      <Routes>
        <Route path="/" element={<Home property={property} reviews={reviews}/>}/>
        <Route path="/contact" element={<Contact user={user}  />}/>
        <Route path="/photos" element={<Photos user={user} photos={photos} />}/>
        <Route path="/amenities" element={<Amenity />}/>
        <Route path="/leave-a-review" element={<CreateReview onAddReview={handleAddReview} user={user} property={property}/>}/>
        <Route path="/edit-review" element={<EditReview onUpdateReview={handleUpdateReview} reviews={reviews} onDeleteReview={handleDeleteReview} user={user}/>}/>
      </Routes>

    </div>
  );
}

export default App;