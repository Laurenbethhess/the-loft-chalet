import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

function TheCalendar() {
    const [calendar, setCalendar] = useState('');
    const [dates, setDates] = useState([]);
    const minDate = new Date();


    useEffect(() => {
        // fetch('http://localhost:3000/reservations')
        fetch('https://the-loft-chalet.herokuapp.com/reservations')
        .then(r => r.json())
        .then(dates => setDates(dates))
      }, [])
    

    const justDates = dates.map(date => date.date)
    const values = justDates.map(date => new Date(date))
    
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
        </div>

    )
}

export default TheCalendar