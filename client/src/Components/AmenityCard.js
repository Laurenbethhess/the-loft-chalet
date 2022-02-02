import { useState, useEffect } from "react";

function AmenityCard( { amenity } ) {

    return (
        <div>
            <li>{amenity.name} - {amenity.description}</li>
        </div>
    )
}

export default AmenityCard