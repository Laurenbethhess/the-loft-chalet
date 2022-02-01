import { useState, useEffect } from "react";

function Home( { user } ) {

    return (
        <div>
            <h1>Hello, {user.first_name} <img className="avatar" src={user.avatar_url}/> </h1>
        </div>
    )
}

export default Home
