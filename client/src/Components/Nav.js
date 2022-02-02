import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav( { user, onSetUser } ) {

    function handleLogoutClick() {
        fetch("https://the-loft-chalet.herokuapp.com//logout", { method: "DELETE" }).then((r) => {
        // fetch("http://localhost:4000/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                onSetUser(null);
            }
        });
    }

    return (
        <div>
            <br/>
            <>Hello, {user.first_name}<img className="avatar" src={user.avatar_url}/></>
            <Link to="/photos">Photos</Link><>|</>
            <Link to="/contact">Contact</Link><>|</>
            <Link to="/">Home</Link><>-</>
            <button onClick={handleLogoutClick}>Logout</button>
            <br/>
            <>____________________________________________________________________________</>
        </div>
    )
}

export default Nav

