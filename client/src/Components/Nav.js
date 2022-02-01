import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Nav( { user, onSetUser } ) {

    function handleLogoutClick() {
        fetch("http://localhost:4000/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                onSetUser(null);
            }
        });
    }

    return (
        <div>
            <br/>
            <Link to="/">Home</Link><>|</>
            <Link to="/contact">Contact</Link><>|</>
            <Link to="/photos">Photos</Link><>-</>
            <button onClick={handleLogoutClick}>Logout</button>
            <br/>
            <>____________________________________________________________________________</>
        </div>
    )
}

export default Nav

