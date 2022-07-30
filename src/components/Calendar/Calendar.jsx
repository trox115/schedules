import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.scss";
import pt from 'date-fns/locale/pt';
import { addDays, isAfter, setDate } from "date-fns";
import AppContext from "../../Context/App.context";
import  format  from "date-fns/format";


const Calendar = () => {
  const {setDate} = useContext(AppContext)
  const [startDate, setStartDate] = useState(addDays(new Date(), 1));
  useEffect(() => {
    setDate(format(startDate, 'dd LLLL', { locale: pt }))    
  }) 

  const isAvailable = (date) => {
    const today = new Date();
    
    return isAfter(date, today);
  }
  
  return (
    <DatePicker filterDate={ isAvailable } locale={ pt } selected={startDate} onChange={(date) => setStartDate(date)} inline className="calendar"/>
  );
};

export default Calendar;