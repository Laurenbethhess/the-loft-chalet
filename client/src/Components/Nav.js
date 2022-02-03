import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';


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
        <div className="nav">
            <br/>
            <div className="greeting">
                Hello, {user.first_name} !
            </div>
            
            <Link className="amenities_link" to="/amenities">Amenities</Link>
            <Link className="photos_link" to="/photos">Photos</Link>
            <Link className="create_link" to="/leave-a-review">Leave a Review</Link>
            <Link className="edit_link" to="/edit-review">Edit Review</Link>
            <Link className="contact_link" to="/contact">Contact</Link>
            <Link className="main_link" to="/">Main</Link>
            <div className="logout" onClick={handleLogoutClick}>Logout</div>
            {lastElement?
            <Rating className="property_rating" name="read-only" value={lastElement.property.average_rating} readOnly />
            :
            <></>
            }
            
        </div>
    )
}

export default Nav

