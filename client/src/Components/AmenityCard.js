import { useState, useEffect } from "react";

function AmenityCard( { amenity } ) {

    return (
        <div>
            <p>{amenity.name} - {amenity.description}</p>
        </div>
    )
}

export default AmenityCard