import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function DeleteReservationCard({ reservation, onDeleteReservation }) {

    function handleDeleteClick() {
        fetch(`https://the-loft-chalet.herokuapp.com/reservations/${reservation.id}`, {
        // fetch(`http://localhost:3000/reservations/${reservation.id}`, {
          method: "DELETE",
        })
        onDeleteReservation(reservation.id)
    }

    return (
        <div className="card">
            <div>
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
                <br/>
            </div>      
        </div>
    )
}

export default DeleteReservationCard