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
import TheCalendar from "./Components/TheCalendar";
import EditResponse from "./Components/EditResponse";
import MapContainer from "./Components/MapContainer";

function App() {
  const [user, setUser] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [property, setProperty] = useState('')
  const [calendar, setCalendar] = useState('');
  const [averageRating, setAverageRating] = useState('')
  const [propertyRating, setPropertyRating] = useState('')
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetch('/photos')
    .then(r => r.json())
    .then(photos => setPhotos(photos))
  }, [])

  useEffect(() => {
    fetch('/comment_ratings')
    .then(r => r.json())
    .then(reviews => setReviews(reviews))
  }, [])

  useEffect(() => {
    fetch('/properties/1')
    .then(r => r.json())
    .then(property => {
      setProperty(property)
      setPropertyRating(property.average_rating)
    })
  }, [])

  useEffect(() => {
  // auto-login
    fetch("/properties/users/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/calendars/1')
    .then(r => r.json())
    .then(calendar => setCalendar(calendar))
  }, [])

  useEffect(() => {
    fetch('/calendars/1')
    .then(r => r.json())
    .then(calendar => setReservations(calendar.reservations))
  }, [])

  useEffect(() => {
    fetch('/response_to_comments')
    .then(r => r.json())
    .then(responses => setResponses(responses))
  }, [])

function handleAddReview(newReview) {
  setReviews([...reviews, newReview])
  setAverageRating(newReview.property.average_rating)
}

function handleAddReservation(newReservation) {
  setReservations([...reservations, newReservation])
}

function handleAddResponse(newResponse) {
  setResponses([...responses, newResponse])
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
  setAverageRating(updatedReviewObj.property.average_rating)
}

function handleUpdateResponse(updatedResponseObj) {
  const updatedResponses = responses.map(response => {
    if (response.id === updatedResponseObj.id) {
      return updatedResponseObj;
    } else {
      return response;
    }
  });
  setResponses(updatedResponses)
}

function handleDeleteReview(id) {
  const finalReviews = reviews.filter(review => review.id !== id)
  setReviews(finalReviews)
}

function handleDeleteReservation(id) {
  const finalReservations = reservations.filter(reservation => reservation.id !== id)
  setReservations(finalReservations)
}

function handleDeleteResponse(id) {
  const finalResponses = responses.filter(response => response.id !== id)
  setResponses(finalResponses)
}

  return (
    <div >
      <Nav user={user} onSetUser={setUser} property={property} reviews={reviews} averageRating={averageRating} propertyRating={propertyRating} onAddReview={handleAddReview} />
      <Routes >
        <Route path="/" element={<Home user={user} property={property} reviews={reviews} onLogin={setUser} responses={responses} onAddResponse={handleAddResponse} onAddReview={handleAddReview}/>}/>
        <Route path="/contact" element={<Contact user={user}  />}/>
        <Route path="/photo" element={<Photos user={user} photos={photos} />}/>
        <Route path="/amenity" element={<Amenity property={property} />}/>
        <Route path="/leave-a-review" element={<CreateReview onLogin={setUser} onAddReview={handleAddReview} user={user} property={property}/>}/>
        <Route path="/login" element={<Login user={user} onLogin={setUser} />}/>
        <Route path="/edit-review" element={<EditReview onLogin={setUser} onUpdateReview={handleUpdateReview} reviews={reviews} onDeleteReview={handleDeleteReview} onDeleteResponse={handleDeleteResponse} user={user} property={property} onSetProperty={setProperty} onSetAverageRating={setAverageRating} onSetPropertyRating ={setPropertyRating} onSetResponses={setResponses}/>}/>
        <Route path="/calendar" element={<TheCalendar user={user} onLogin={setUser} reservations={reservations} onAddReservation={handleAddReservation} calendar={calendar} onDeleteReservation={handleDeleteReservation}  />}/>
        <Route path="/edit-response" element={<EditResponse user={user} onLogin={setUser} responses={responses} onUpdateResponse={handleUpdateResponse} onDeleteResponse={handleDeleteResponse}  />}/>
        <Route path="/map" element={<MapContainer />}/>
      </Routes>
    </div>
  );
}

export default App;