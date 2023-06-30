import {useState} from "react";
import {useDispatch} from "react-redux";
const SearchBar = () => {
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch("aca iria la action").then(() => setDate(""));
  };
  console.log(date);
  return (
    <div>
      <input
        min="2001-01-01"
        type="date"
        placeholder="Easter egg nadie va a leerme"
        className="block w-full text-sm placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
