import React, {useEffect, useState} from "react";
import {getMonths, getMonthsPerYear} from "../../Redux/actions";
import {useSelector, useDispatch} from "react-redux";

const YCalendar = () => {
  const dispatch = useDispatch();
  const [year, setYear] = useState(2023);
  console.log(year);
  useEffect(() => {
    dispatch(getMonthsPerYear(year));
    dispatch(getMonths());
  }, [year]);
  const months = useSelector((state) => state.allMonths);
  const daysByMonth = useSelector((state) => state.monthsPerYear);

  const generateCalendars = () => {
    let calendars = [];
    for (let i = 0; i < Object.keys(months).length; i++) {
      let calendar = (
        <div className="w-full max-w-lg p-5 mx-auto bg-white rounded-2xl shadow-xl flex flex-col">
          <div className="flex justify-center pb-4">
            <span className="uppercase text-sm font-semibold text-gray-600">
              {months[i]}
            </span>
          </div>
          <div className="flex justify-center  font-medium uppercase text-xs pt-4 pb-2 border-t">
            <div className=" border rounded-sm w-full h-5 flex items-center justify-center border-slate-900 text-slate-900 shadow-md">
              sun
            </div>
            <span className=" border rounded-sm w-full h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              mon
            </span>
            <span className=" border rounded-sm w-full h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              tue
            </span>
            <span className=" border rounded-sm w-full h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              wed
            </span>
            <span className=" border rounded-sm w-full h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              thu
            </span>
            <span className=" border rounded-sm w-full h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              fri
            </span>
            <span className=" border rounded-sm w-full h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
              sat
            </span>
          </div>
        </div>
      );
      let days = [];
      const monthName = months[i].toLowerCase();
      const daysInMonth = daysByMonth[monthName].length;
      for (let j = -3; j <= daysInMonth; j++) {
        days.push(
          <span
            className={`${
              j <= 0 ? "text-gray-400" : ""
            } w-10 flex justify-center items-center cursor-pointer`}>
            {(j <= 0 ? 31 + j : j).toString().padStart(2, "0")}
          </span>
        );
        if ((j + 4) % 7 === 0 || j === daysInMonth) {
          let justifyClass = "justify-between";
          if (days.length < 7) {
            justifyClass = "justify-start gap-[0.40rem]";
          }
          calendar = React.cloneElement(calendar, {}, [
            ...calendar.props.children,
            <div
              className={`flex ${justifyClass} ml-${
                j === daysInMonth ? 1 : 0
              } font-medium text-sm  pb-2`}>
              {days}
            </div>,
          ]);
          days = [];
        }
      }
      calendars.push(calendar);
    }
    return calendars;
  };

  const handleClickPrev = (e) => {
    e.preventDefault();
    setYear(year - 1);
  };
  const handleClickNext = (e) => {
    e.preventDefault();
    setYear(year + 1);
  };

  const calendars = generateCalendars();

  return (
    <div className="min-h-screen p-5 bg-gray-200">
      <h1 className="font-[Poppins] items-center text-6xl mb-4  h-20 flex justify-center w-full ">
        <button
          onClick={handleClickPrev}
          className="p-1 mr-20 hover:scale-110 duration-200">
          <svg
            width="0.5em"
            fill="black"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-left-circle"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fill-rule="evenodd"
              d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
            />
            <path
              fill-rule="evenodd"
              d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
            />
          </svg>
        </button>
        <a
          href="/month"
          className="cursor-pointer hover:scale-110 duration-200">
          {year}
        </a>
        <button
          onClick={handleClickNext}
          className="p-1 ml-20 hover:scale-110 duration-300">
          <svg
            width="0.5em"
            fill="black"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right-circle"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fill-rule="evenodd"
              d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
            />
            <path
              fill-rule="evenodd"
              d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </h1>
      <div className="grid grid-cols-4 gap-5 grid-rows-3">{calendars}</div>
    </div>
  );
};
export default YCalendar;
