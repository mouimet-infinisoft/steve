import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './index.css';

export function AppCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
