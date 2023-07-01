import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postEvent} from "../../../../Redux/actions";
const Form = () => {
  const [input, setInput] = useState({
    name: "",
    initialDate: "",
    finalDate: "",
    image: "",
    hour: "",
    description: "",
    location: "",
    category: "",
    reminder: false,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postEvent(input));
    setInput({
      name: "",
      initialDate: "",
      finalDate: "",
      image: "",
      hour: "",
      description: "",
      location: "",
      category: "",
      reminder: false,
    });
  };
  return (
    <div className="buttons">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M12 8V16M8 12H16"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[40vw] h-full from-[#076585]  to-[#fff] bg-gradient-to-b text-base-content">
            <form onSubmit={handleSubmit}>
              <h1 className=" font-[Poppins] text-4xl drop-shadow-lg shadow-black mb-10 text-white  mt-5 ">
                Add your custom event.
              </h1>
              <div className="grid  gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium font-[Poppins] text-white dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    name="name"
                    onChange={handleChange}
                    value={input.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium font-[Poppins] text-white dark:text-white">
                    Initial Date
                  </label>
                  <input
                    type="date"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    name="initialDate"
                    onChange={handleChange}
                    value={input.initialDate}
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-[Poppins] font-medium text-white dark:text-white">
                    Final Date
                  </label>
                  <input
                    type="date"
                    id="company"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    name="finalDate"
                    onChange={handleChange}
                    value={input.finalDate}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-[Poppins] font-medium text-white dark:text-white">
                    Image
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    name="image"
                    onChange={handleChange}
                    value={input.image}
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block mb-2  font-[Poppins] text-sm font-medium text-white dark:text-white">
                    Description
                  </label>
                  <input
                    type="text"
                    id="website"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    name="description"
                    onChange={handleChange}
                    value={input.description}
                  />
                </div>
                <div>
                  <label
                    htmlFor="visitors"
                    className="block mb-2 text-sm font-[Poppins] font-medium text-white dark:text-white">
                    Location
                  </label>
                  <input
                    type="text"
                    id="visitors"
                    className="bg-gray-50 border  border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    name="location"
                    onChange={handleChange}
                    value={input.location}
                  />
                </div>
              </div>
              <div className=" mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-[Poppins] font-medium text-white dark:text-white">
                  Category
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  name="category"
                  onChange={handleChange}
                  value={input.category}
                />
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value={input.reminder}
                    onChange={handleChange}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    name="reminder"
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium font-[Poppins] text-gray-900 dark:text-gray-300">
                  Remind me of my {""}
                  <a
                    href="#"
                    className="text-blue-600 font-[Poppins] hover:underline dark:text-blue-500">
                    new event.
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add event
              </button>
            </form>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
