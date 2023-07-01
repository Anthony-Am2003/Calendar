import { today } from "../../../Helpers/Dates";

const DayCell = (day, monthNumber) => {
  const isCurrentMonth = Number(day.fullDate.split("-")[1]) === monthNumber + 1;
  const classNames = `border p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ${
    isCurrentMonth ? "" : "bg-gray-100"
  }`;
  return (
    <td key={day.date} className={classNames}>
      <div className="flex flex-col h-36 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
        <div className="top h-5 w-full">
          <div
            className={
              today === day.fullDate
                ? "mx-auto w-6 h-6 rounded-full bg-blue-600"
                : "text-gray-500"
            }
          >
            {day.date}
          </div>
        </div>
        <div className="bottom flex-grow h-36 py-1 w-full cursor-pointer"></div>
      </div>
    </td>
  );
};

export default DayCell;