import { useState, useEffect } from "react";

function PhotoCard( { photo } ) {

    return (
        <div>
            <h1>{photo.photo_name}</h1>
            <img src={photo.photo_url}/>
        </div>
    )
}

export default PhotoCard