import { useState } from "react";
import Box from '@mui/material/Box';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import Login from "./Login";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteReservationCard from "./DeleteReservationCard";

function TheCalendar( {user, onLogin, reservations, calendar, onAddReservation, onDeleteReservation }) {
    const minDate = new Date();      
    const justDates = reservations.map(reservation => reservation.date)
    const values = justDates.map(date => new Date(date))
    const [date, setDate] = useState("");
    const [calendar_id, setCalendarId] = useState(calendar.id);
    const [errors, setErrors] = useState([]);
    // const userRenderedReservations = reservations.map(reservation => <DeleteReservationCard reservation={reservation} key={reservation.id} onDeleteReservation={onDeleteReservation}/>)
    const [search, setSearch] = useState("")
    const searchedReservations = reservations.filter(reservation => reservation.date.includes(search))
    const renderSearchedReservations = searchedReservations.map(reservation => <DeleteReservationCard reservation={reservation} key={reservation.id} onDeleteReservation={onDeleteReservation}/>)

    if (!user) return <Login onLogin={onLogin} />

    // const admin = user.id === 1
    const admin = user.admin === true


    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setSearch(search);
      }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/reservations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
              date: date, 
              calendar_id: calendar_id 
            }),
        }).then((r) => {
            if (r.ok) {
              r.json().then(newReservation => {
                  onAddReservation(newReservation)
                  setDate("")
                  setCalendarId(calendar_id)
                })
            } else {
              r.json().then((err) => setErrors(err.errors));  
            }
          })
      }
    
    return (

        <div align='center'>
            <Box sx={{paddingTop: 20, width: '100%', maxWidth: 1200 }}>
                <CalendarComponent 
                    id="calendar" 
                    min={minDate} 
                    isMultiSelection={true} 
                    values={values}  
                />
            </Box>
            {admin?
                <div className="create_card">
                    <Card sx={{ minWidth: 275, bgcolor: '#cfe8fc' }} style={{backgroundColor: "#B1DFB0"}}>
                        <CardContent>
                            <Typography >
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    sx={{bgcolor: '#cfe8fc' }}
                                    multiline
                                    variant="filled"
                                    type="text"
                                    name="comment"
                                    autoComplete="off"
                                    value={date}
                                    label="Date 00/00/0000"
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <TextField
                                    sx={{bgcolor: '#cfe8fc' }}
                                    multiline
                                    variant="filled"
                                    type="text"
                                    name="comment"
                                    autoComplete="off"
                                    value={calendar_id}
                                    label="Calendar Id"
                                    onChange={(e) => setCalendarId(e.target.value)}
                                />
                                <Button variant="outlined" type="submit">Submit</Button>
                                <br/><br/>
                                <div>
                                    {errors.map((err) => (
                                    <li key={err}>{err}</li>
                                    ))}
                                </div>
                                <br/>
                            </form>
                            <form onSubmit={handleSearchSubmit}>
                                <TextField
                                    type="text"
                                    id="search"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}                  
                                    sx={{bgcolor: '#cfe8fc' }}
                                    variant="filled"
                                    name="search"
                                    autoComplete="off"
                                    label="Search"
                                />
                            </form>
                        </Typography>
                        <br/><br/>
                        {renderSearchedReservations}
                        </CardContent>
                    </Card>
                </div>
                :
                <></>
            }
            <br/><br/><br/>
        </div>

    )
}

export default TheCalendar