import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DateEditor = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <div>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        dateFormat={'yyyy/MM/dd'}
      />
    </div>
  );
};

export default DateEditor;
