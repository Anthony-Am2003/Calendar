import {useEffect, useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEvents} from "../../Redux/actions";

const Events = () => {
  const dispatch = useDispatch();
  const {events} = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(3);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    dispatch(getEvents());
  }, []);
  console.log(events);
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const eventsToRender = events.slice(startIndex, endIndex);
  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);

  return (
    <section className="text-gray-600 body-font">
      {preloader ? (
        <div className="absolute  inset-0 min-h-screen flex items-center justify-center flex-col bg-[#191919] text-[#ffff]">
          <h1 className="text-4xl mb-2 font-[Poppins] font-normal">
            We manage
          </h1>
          <h1 className="text-5xl font-[Poppins] flex-col  text-center font-normal">
            YOUR events. <br />
            <h1
              disabled
              type="button"
              className="text-white mt-4  bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm font-[Poppins] px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </h1>
          </h1>
        </div>
      ) : (
        <div className="container px-5  mx-auto">
          <div className="flex flex-col text-center w-full mb-8">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-3 mt-1">
              Check all the events that you added. Also you can{" "}
              <a href="/month" className="link link-secondary">
                Go back
              </a>
            </h2>
            <h1 className="sm:text-3xl md:text-5xl text-2xl font-medium font-[Poppins] text-gray-900">
              Upcoming events
            </h1>
          </div>

          <div className="container grid md:grid-rows-2 gap-5 md:grid-cols-2 sm:grid-cols-2 mx-auto">
            {eventsToRender.map((event, index) => (
              <div className="flex basis-5 flex-wrap -m-4">
                <div className="p-4 c w-full">
                  <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </div>
                      <h2 className="text-gray-900 text-lg title-font font-medium">
                        {event.name}
                      </h2>
                    </div>
                    <div className="flex-grow">
                      <p className="leading-relaxed text-base">
                        {event.description}
                      </p>
                      <a
                        href={`/eventsday?name=${event.name}`}
                        className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center join mt-7">
            {currentPage > 1 ? (
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className="join-item btn">
                «
              </button>
            ) : (
              <button
                disabled
                onClick={() => setCurrentPage(currentPage - 1)}
                className="join-item btn">
                «
              </button>
            )}
            {/* Muestra el número de página actual y el número total de páginas */}
            <span className="join-item btn btn-primary">{currentPage}</span>
            {/* Botón para ir a la siguiente página */}
            {currentPage < totalPages ? (
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="join-item btn">
                »
              </button>
            ) : (
              <button
                disabled
                onClick={() => setCurrentPage(currentPage + 1)}
                className="join-item btn">
                »
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default Events;
