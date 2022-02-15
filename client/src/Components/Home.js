import React, { useState, useEffect } from "react";
import ReviewsCard from "./ReviewsCard";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CreateReview from "./CreateReview"
import Prices from "./Prices";

function Home( { property, reviews, onLogin, user, responses, onAddResponse, onAddReview } ) {
    const [homePhoto, setHomePhoto] = useState('')

    useEffect(() => {
    fetch('/photos/1')
    .then(r => r.json())
    .then(homePhoto => setHomePhoto(homePhoto))
    }, [])

    const renderReviews = reviews.map(review => <ReviewsCard review={review} key={review.id} onLogin={onLogin} user={user} responses={responses} onAddResponse={onAddResponse} />)

    return (
        <div>
            <div align='center'>
                <Box sx={{paddingTop: 12, width: '100%', maxWidth: 1200 }}>
                    <Typography style={{fontWeight: "bold", fontSize: 30, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                        Welcome to {property.name}!
                    </Typography>
                </Box>
            </div>

            <div align='center'>
                <Box sx={{paddingTop: 1, width: '100%', maxWidth: 1200 }}>
                    <Typography>
                        <img className="home_photo"  src={homePhoto.photo_url}/>
                    </Typography>
                </Box>
            </div>
            <br/>
            <div align='center'>
                <Box sx={{ width: '100%', maxWidth: 1200 }}>
                    <Typography style={{fontSize: 20, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                    {property.description}
                    </Typography>
                </Box>
            </div>
            <div>
                <Prices property={property}/>
            </div>
            <CreateReview onAddReview={onAddReview} property={property} onLogin={onLogin} user={user} />
            <br/>
            {renderReviews}
            <br/>
        </div>
    )
}

export default Home
