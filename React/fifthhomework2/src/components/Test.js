import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Theme from './Theme';

function Test() {
    return (
        <>
            <button></button>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar/>
            </LocalizationProvider>
        </>
    );
  }
export default Theme(Test)
  