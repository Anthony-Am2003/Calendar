// Utils
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDays, getMonths, getMonthsPerYear } from "../../Redux/actions";
// Components
import NavBar from "../NavBar/NavBar";
import TableRow from "./TableRow/TableRow";
import DaysName from "./DaysName/DaysName";
// Helpers
import { monthNumberTd, week, yearNumberTd } from "../Helpers/Dates";
import { completeMonth } from "../Helpers/Format";

const MCalendar = () => {
  const dispatch = useDispatch();
  //   const {events} = useSelector((state) => state);
  //   console.log(events);
  const { showedMonths } = useSelector((state) => state);
  const prev = showedMonths.prevMonth;
  const month = showedMonths.actualMonth;
  const next = showedMonths.nextMonth;

  completeMonth(month, prev, next);

  const [monthNumber, setMonthNumber] = useState(monthNumberTd);
  const [yearNumber, setYearNumber] = useState(yearNumberTd);

  useEffect(() => {
    dispatch(getDays(monthNumber, yearNumber));
    dispatch(getMonthsPerYear(yearNumber));
    dispatch(getMonths());
  }, [monthNumber, yearNumber]);

  const handleClickPrev = () => {
    if (monthNumber === 0) {
      setMonthNumber(monthNumber + 11);
      setYearNumber(yearNumber - 1);
    } else setMonthNumber(monthNumber - 1);
  };

  const handleClickNext = () => {
    if (monthNumber === 11) {
      setMonthNumber(monthNumber - 11);
      setYearNumber(yearNumber + 1);
    } else setMonthNumber(monthNumber + 1);
  };

  return (
    <div className="container mx-auto">
      <div className="wrapper bg-white rounded shadow w-full ">
        <NavBar
          monthNumber={monthNumber}
          setMonthNumber={setMonthNumber}
          yearNumber={yearNumber}
          setYearNumber={setYearNumber}
          handleClickPrev={handleClickPrev}
          handleClickNext={handleClickNext}
        />
        <table className="w-full">
          <thead>
            <DaysName week={week} />
          </thead>
          <tbody>
            <TableRow days={month.slice(0, 7)} monthNumber={monthNumber} />
            <TableRow days={month.slice(7, 14)} monthNumber={monthNumber} />
            <TableRow days={month.slice(14, 21)} monthNumber={monthNumber} />
            <TableRow days={month.slice(21, 28)} monthNumber={monthNumber} />
            <TableRow days={month.slice(28, 35)} monthNumber={monthNumber} />
            <TableRow days={month.slice(35, 42)} monthNumber={monthNumber} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MCalendar;
