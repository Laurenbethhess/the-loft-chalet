import React from "react";

function PhotoCard( { photo } ) {
    
    return (
        <div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', fontFamily: "Courier"}}>
                {photo.photo_name}
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img  className="all_photo" src={photo.photo_url}/>
            </div>
        </div>
    )
}

export default PhotoCard