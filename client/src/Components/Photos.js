import { useState, useEffect } from "react";

function Photos( { user } ) {

    return (
        <div>
            <h1>Hello, {user.first_name} </h1>
        </div>
    )
}

export default Photos