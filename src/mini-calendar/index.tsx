"use client"
import { useState } from 'react';
import './index.css';

export interface CalendarProps {
  defaultValue?: Date,
  onChange?: (date: Date) => void;
}

function Calendar({
  defaultValue = new Date(),
  onChange,
}: CalendarProps) {
  const [date, setDate] = useState(defaultValue);

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const daysOfMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };

  const firstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDates = () => {
    const days = [];
    
    const daysCount = daysOfMonth(date.getFullYear(), date.getMonth());
    const firstDay = firstDayOfMonth(date.getFullYear(), date.getMonth());

    for (let i = 0; i < firstDay; i++) {

      days.push(
        <div key={`empty-${i}`} className="empty"></div>
      )
    }

    for (let i = 1; i <= daysCount; i++) {
      const clickHandler = () => {
        const curDate = new Date(date.getFullYear(), date.getMonth(), i);
        setDate(curDate);
        onChange?.(curDate);
      };

      if (i === date.getDate()) {
        days.push(<div key={i} className={"day selected"} onClick={clickHandler}>{i}</div>)
      } else {
        days.push(<div key={i} className={"day"} onClick={clickHandler}>{i}</div>)
      }
    }
    return days;
  }

  return(
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <div>{date.getFullYear()} 年 {date.getMonth()+1} 月</div>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day">日</div>
        <div className="day">一</div>
        <div className="day">二</div>
        <div className="day">三</div>
        <div className="day">四</div>
        <div className="day">五</div>
        <div className="day">六</div>
        {renderDates()}
      </div>
    </div>
  )
}

export default Calendar;