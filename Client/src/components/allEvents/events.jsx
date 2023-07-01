import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEvents} from "../../Redux/actions";
const Events = () => {
  const dispatch = useDispatch();
  const {events} = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  console.log(events);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const eventsToRender = events.slice(startIndex, endIndex);
  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Check all the events that you added.
          </h2>
          <h1 className="sm:text-3xl md:text-5xl text-2xl font-medium  font-[Poppins] text-gray-900">
            Upcoming events
          </h1>
        </div>
        <div className="container grid grid-rows-2 gap-5 grid-cols-2  mx-auto">
          {eventsToRender.map((event, index) => (
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-full">
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

        <div className="flex justify-center mt-4">
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
          )}
          {/* Muestra el número de página actual y el número total de páginas */}
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          {/* Botón para ir a la siguiente página */}
          {currentPage < totalPages && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
export default Events;
