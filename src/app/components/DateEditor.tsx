import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface DateEditorProps {
  startDate: Date;
  onChange: React.Dispatch<React.SetStateAction<Date>>;
}

const DateEditor = ({ startDate, onChange }: DateEditorProps) => {
  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={(date: Date) => onChange(date)}
      dateFormat={'yyyy/MM/dd'}
    />
  );
};

export default DateEditor;
