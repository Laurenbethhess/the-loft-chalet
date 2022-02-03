import React, { useState, useEffect } from "react";
import ReviewsCard from "./ReviewsCard";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

function Home( { property, reviews } ) {
    const [homePhoto, setHomePhoto] = useState('')

    useEffect(() => {
    // fetch('https://the-loft-chalet.herokuapp.com/photos/1')
    fetch('http://localhost:3000/photos/1')
    .then(r => r.json())
    .then(homePhoto => setHomePhoto(homePhoto))
  }, [])

  const Item = styled(Paper)(() => ({
    textAlign: 'center',
    color: "black",
    fontSize: 40,
    paddingTop: 70,
  }));

    const renderReviews = reviews.map(review => <ReviewsCard review={review} key={review.id} />)

    return (
        <div>
            <div className="welcome">
                    Welcome to {property.name}!
            </div>
            <div style={{paddingTop:50, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img className="home_photo"  src={homePhoto.photo_url}/>
            </div>
            <div className="description">
                {property.description}
            </div>
            <br/>
            {renderReviews}
            <br/>
        </div>
    )
}

export default Home
