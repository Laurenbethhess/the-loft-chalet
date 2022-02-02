import { useState, useEffect } from "react";
import AmenityCard from "./AmenityCard";

function Amenity( { user } ) {
    const [amenities, setAmenities] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/amenities')
        // fetch('https://the-loft-chalet.herokuapp.com/amenities')
        .then(r => r.json())
        .then(amenities => setAmenities(amenities))
    }, [])

    const renderAmenities = amenities.map(amenity => <AmenityCard amenity={amenity} key={amenity.id} />)


    return (
        <div>
            {renderAmenities}

        </div>
    )
}

export default Amenity