import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function DeleteReservationCard({ reservation, onDeleteReservation }) {

    function handleDeleteClick() {
        // fetch(`https://the-loft-chalet.herokuapp.com/comment_ratings/${review.id}`, {
        fetch('http://localhost:3000/calendars/1', {
          method: "DELETE",
        })
        onDeleteReservation(reservation.id)
    }


    return (
        <div className="card">
        <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#B1DFB0"}}>
            <CardContent>
                <Typography >
                    {reservation.date}
                </Typography>
                <Typography>
                    <Button variant="outlined" onClick={handleDeleteClick}>Delete Reservation</Button>
                </Typography>

            </CardContent>
        </Card>
    </div>


    )
}

export default DeleteReservationCard