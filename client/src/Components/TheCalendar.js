import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import Login from "./Login";

function TheCalendar( {user, onLogin, calendar}) {
    const minDate = new Date();      
    const reservations = calendar.reservations
    const justDates = reservations.map(reservation => reservation.date)
    const values = justDates.map(date => new Date(date))

    if (!user) return <Login onLogin={onLogin} />

    const admin = user.id === 1
    
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
                <Box sx={{paddingTop: 20, width: '100%', maxWidth: 1200 }}>
                    <CalendarComponent 
                        id="calendar" 
                        min={minDate} 
                        isMultiSelection={true} 
                        values={values}  
                    />
                </Box>
                :
                <></>
            }

        </div>

    )
}

export default TheCalendar