import { useState, useEffect } from "react";

function Contact( { user } ) {

    return (
        <div>
            <h1>Hello, {user.first_name} </h1>
        </div>
    )
}

export default Contact