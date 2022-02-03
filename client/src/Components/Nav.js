import React from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Nav( { user, onSetUser, property, reviews } ) {

    function handleLogoutClick() {
        // fetch("https://the-loft-chalet.herokuapp.com//logout", { method: "DELETE" }).then((r) => {
        fetch("http://localhost:3000/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                onSetUser(null);
            }
        });
    }

    let arry = reviews
    let lastElement = arry[arry.length - 1];

    return (
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hello, {user.first_name} !
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link color="white" className="amenities_link" to="/amenities">Amenities</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link className="photos_link" to="/photos">Photos</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link className="create_link" to="/leave-a-review">Leave a Review</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link className="edit_link" to="/edit-review">Edit Review</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link className="contact_link" to="/contact">Contact</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link className="main_link" to="/">Main</Link>
                </Typography>
                <Rating className="property_rating" value={lastElement.property.average_rating} readOnly />
                <Button onClick={handleLogoutClick} color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
            </Box>

    )
}

export default Nav

