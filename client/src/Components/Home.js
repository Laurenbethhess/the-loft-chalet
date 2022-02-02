import { useState, useEffect } from "react";
import AmenityCard from "./AmenityCard";

function Home( { user } ) {
    const [homePhoto, setHomePhoto] = useState('')
    const [property, setProperty] = useState('')
    const [amenities, setAmenities] = useState([])


    useEffect(() => {
    fetch('https://the-loft-chalet.herokuapp.com/photos/1')
    .then(r => r.json())
    .then(homePhoto => setHomePhoto(homePhoto))
  }, [])

    useEffect(() => {
        fetch('https://the-loft-chalet.herokuapp.com/properties/1')
        .then(r => r.json())
        .then(property => setProperty(property))
    }, [])

    useEffect(() => {
        fetch('https://the-loft-chalet.herokuapp.com/amenities')
        .then(r => r.json())
        .then(amenities => setAmenities(amenities))
    }, [])

    const renderAmenities = amenities.map(amenity => <AmenityCard amenity={amenity} key={amenity.id} />)



    return (
        <div>
            <h1>Welcome to {property.name}! </h1>
            <img className="home_photo" src={homePhoto.photo_url}/>
            <p>{property.description}</p>
            {renderAmenities}
        </div>
    )
}

export default Home
