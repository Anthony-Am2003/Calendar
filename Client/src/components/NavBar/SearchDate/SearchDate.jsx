import {useState} from "react";
import {useDispatch} from "react-redux";

const SearchDate = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch("aca iria la action").then(() => setDate(""));
  };

  return (
    <div className="flex items-center w-1/4  justify-between">
      <a href="/events" className="btn-ghost btn">
        <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
          <polyline
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points=" 8,5 8,1 16,1 16,5"
            strokeLinejoin="round"
          />
          <polyline
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="9,15 1,15 1,5 23,5 23,15 15,15"
            strokeLinejoin="round"
          />
          <polyline
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="22,18 22,23 2,23 2,18"
            strokeLinejoin="round"
          />

          <rect
            x="9"
            y="13"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            width="6"
            height="4"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <input
        className="block  text-sm placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        min="2001-01-01"
        type="date"
        onChange={(e) => setDate(e.target.value)}
        placeholder="Easter egg nadie va a leerme / si leemos codigo"
      />
    </div>
  );
};

export default SearchDate;
