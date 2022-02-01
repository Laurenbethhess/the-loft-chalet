import { useState, useEffect } from "react";

function Home( { user } ) {
    const [homePhoto, setHomePhoto] = useState('')

    useEffect(() => {
    // fetch('http://localhost:3000/photos/2')
    fetch('https://the-loft-chalet.herokuapp.com/photos/1')
    .then(r => r.json())
    .then(homePhoto => setHomePhoto(homePhoto))
  }, [])


    return (
        <div>
            <img className="home_photo" src={homePhoto.photo_url}/>
            <h1> </h1>
        </div>
    )
}

export default Home
