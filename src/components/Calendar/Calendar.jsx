import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.scss";
import pt from 'date-fns/locale/pt';
import { addDays, isAfter } from "date-fns";


const Calendar = () => {
  const [startDate, setStartDate] = useState(addDays(new Date(), 1));

  const isAvailable = (date) => {
    const today = new Date();
    
    return isAfter(date, today);
  }
  
  return (
    <DatePicker filterDate={ isAvailable } locale={ pt } selected={startDate} onChange={(date) => setStartDate(date)} inline className="calendar"/>
  );
};

export default Calendar;