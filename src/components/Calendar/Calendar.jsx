import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, isAfter } from "date-fns";
import { useSelector } from "react-redux";
import { format } from 'date-fns';
import _ from 'lodash';
import pt from 'date-fns/locale/pt';

import "react-datepicker/dist/react-datepicker.css";
import "./Calendar.scss";
import { AppContext } from "../../Context/App.context";
import { useContextSelector } from "use-context-selector";

const Calendar = () => {

  const setDate = useContextSelector(AppContext, state => state.setDate)

  const [startDate, setStartDate] = useState(addDays(new Date(), 1));
  const { schedules } = useSelector((state) => state.schedules);

  useEffect(() => {
    setDate(startDate)    
  }) 

  const isAvailable = (date) => {
    const today = new Date();
    const formatedDate = format(date, 'dd/MM/yyyy');
    if(schedules.length === 0){
      return isAfter(date, today);
    }
    const bookedDates = _.filter(schedules, (booked) => {
      const splitedDate = (booked?.date).split('T')
      return format(new Date(splitedDate), 'dd/MM/yyyy') === formatedDate;
    })

    return isAfter(date, today) && bookedDates.length < 3;
  }
  
  return (
    <DatePicker filterDate={ isAvailable } locale={ pt } selected={startDate} onChange={(date) => setStartDate(date)} inline className="calendar"/>
  );
};

export default Calendar;