import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

function Nav( { user, onSetUser, reviews } ) {
    const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("https://the-loft-chalet.herokuapp.com//logout", { method: "DELETE" }).then((r) => {
        // fetch("http://localhost:3000/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                onSetUser(null);
            }
            navigate('/')
        });
    }

    let arry = reviews
    let lastElement = arry[arry.length - 1];

    return (
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    {user?
                        <>Hello, {user.first_name} !</>
                    :
                        <></>
                    }  
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/">Main</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/amenities">Amenities</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/photos">Photos</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/leave-a-review">Leave a Review</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/edit-review">Edit Review</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    <Link to="/contact">Contact</Link>
                </Typography>
                <Typography component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    {lastElement?
                        < Rating name="read-only" value={lastElement.property.average_rating} readOnly />
                    :
                        <></>
                    }
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Courier"}}>
                    {user?
                        <Button variant="outlined" style={{fontFamily: "Courier", fontSize: 20}} onClick={handleLogoutClick} color="inherit">Logout</Button>
                    :
                        <Link to="/login">Login</Link>
                    } 
                </Typography>
                </Toolbar>
            </AppBar>
            </Box>
    )
}

export default Nav

