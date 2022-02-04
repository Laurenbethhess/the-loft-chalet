import React from "react";
import PhotoCard from "./PhotoCard"

function Photos( { photos } ) {
    const renderPhotos = photos.map(photo => <PhotoCard photo={photo} key={photo.id} />)

    return (
        <div  className="photos_div">
            {renderPhotos}
            <br/>
        </div>
    )
}

export default Photos