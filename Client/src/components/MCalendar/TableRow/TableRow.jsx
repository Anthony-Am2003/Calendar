import DayCell from "./DayCell/DayCell";

const TableRow = ({ days, monthNumber }) => {
  return (
    <tr className='text-center'>
      {days.map((day) => DayCell(day, monthNumber))}
    </tr>
  )
};

export default TableRow;