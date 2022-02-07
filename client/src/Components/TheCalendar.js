import React, { } from "react";
import Box from '@mui/material/Box';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

function TheCalendar() {
    const minDate = new Date();
    const values = [new Date('2/10/2022'), new Date('2/11/2022'), new Date('2/12/2022'), new Date('2/13/2022') ];

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