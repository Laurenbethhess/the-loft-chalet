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
        <div>
            <br/>
            <>Hello, {user.first_name}<img className="avatar" src={user.avatar_url}/></>
            <Link to="/amenities">Amenities</Link><>|</>
            <Link to="/photos">Photos</Link><>|</>
            <Link to="/leave-a-review">Leave a Review</Link><>|</>
            <Link to="/edit-review">Edit Review</Link><>|</>
            <Link to="/contact">Contact</Link><>|</>
            <Link to="/">Main</Link><>-</>
            <button onClick={handleLogoutClick}>Logout</button>
            {lastElement?
            < Rating name="read-only" value={lastElement.property.average_rating} readOnly />
            :
            <></>
            }
            
            
            <br/>
            <>____________________________________________________________________________</>
        </div>
    )
}

export default Nav

