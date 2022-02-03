import { useState, useEffect } from "react";
import ReviewsCard from "./ReviewsCard";

function Home( { property, reviews } ) {
    const [homePhoto, setHomePhoto] = useState('')

    useEffect(() => {
    // fetch('https://the-loft-chalet.herokuapp.com/photos/1')
    fetch('http://localhost:3000/photos/1')
    .then(r => r.json())
    .then(homePhoto => setHomePhoto(homePhoto))
  }, [])

    const renderReviews = reviews.map(review => <ReviewsCard review={review} key={review.id} />)

    return (
        <div>
            <h1>Welcome to {property.name}! </h1>
            <img className="home_photo" src={homePhoto.photo_url}/>
            <p>{property.description}</p>
            <h2>Reviews</h2>
            {renderReviews}
        </div>
    )
}

export default Home
