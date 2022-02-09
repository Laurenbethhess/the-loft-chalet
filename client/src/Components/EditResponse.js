import React from "react";
import EditResponseCard from "./EditResponseCard";
import Login from "./Login";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function EditResponse( { user, onLogin, responses, onUpdateResponse, onDeleteResponse } ) {

    if (!user) return <Login onLogin={onLogin} />

    const user_id = user.id
    const userResponses = responses.filter(response => response.user.id === user_id)
    const userRenderedResponses = userResponses.map(response => <EditResponseCard response={response} key={response.id} onUpdateResponse={onUpdateResponse} onDeleteResponse={onDeleteResponse} />)

    return (
        <div >
            <div className="create_card">
                <Card sx={{ minWidth: 275, bgcolor: '#cfe8fc' }} style={{backgroundColor: "#B1DFB0"}}>
                    <CardContent>
                        <Typography sx={{ minWidth: 275, bgcolor: '#cfe8fc' }} style={{backgroundColor: "#B1DFB0"}} style={{fontSize: 20, fontFamily: "Courier"}} align='center' variant="p" gutterBottom component="div">
                            If you've responsed to a review, you can edit it here.
                        </Typography>       
                    </CardContent>
                </Card>
            </div>
            <br/>
            <div>
                {userRenderedResponses}
            </div>
            
            <br/>
      </div>


    )
}

export default EditResponse