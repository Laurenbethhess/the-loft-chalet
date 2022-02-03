import { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard"

function Photos( { user, photos } ) {
    const renderPhotos = photos.map(photo => <PhotoCard photo={photo} key={photo.id} />)


    return (
        <div>
            {renderPhotos}
        </div>
    )
}

export default Photos