import React, { useState, useEffect } from "react";
import ReviewsCard from "./ReviewsCard";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Home( { property, reviews } ) {
    const [homePhoto, setHomePhoto] = useState('')

    useEffect(() => {
    fetch('https://the-loft-chalet.herokuapp.com/photos/1')
    // fetch('http://localhost:3000/photos/1')
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
            <br/>
            {renderReviews}
            <br/>
        </div>
    )
}

export default Home
