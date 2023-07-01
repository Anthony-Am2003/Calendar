import {monthName} from "../../Helpers/Format";

const Month_Year = ({
  monthNumber,
  yearNumber,
  handleClickNext,
  handleClickPrev,
}) => {
  return (
    <div className="w-1/4 flex flex-row justify-between">
      <button
        onClick={handleClickPrev}
        className="p-1 mr-4 hover:scale-110 duration-200">
        <svg
          width="0.5em"
          fill="black"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-arrow-left-circle"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fillRule="evenodd"
            d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
          />
          <path
            fillRule="evenodd"
            d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
          />
        </svg>
      </button>
      <span className="text-center">{`${monthName(monthNumber).slice(
        0,
        3
      )} ${yearNumber}`}</span>
      <button
        onClick={handleClickNext}
        className="p-1 ml-4 hover:scale-110 duration-300">
        <svg
          width="0.5em"
          fill="black"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-arrow-right-circle"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fillRule="evenodd"
            d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
          />
          <path
            fillRule="evenodd"
            d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Month_Year;
