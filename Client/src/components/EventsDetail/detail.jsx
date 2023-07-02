import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {getDetail} from "../../Redux/actions";
import {useDispatch, useSelector} from "react-redux";
import img from "../../assets/img/pexels-fauxels-3184183.jpg";
import img2 from "../../assets/img/pexels-greta-hoffman-7859031.jpg";

const EventDetail = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const name = new URLSearchParams(location.search).get("name");
  const selector = useSelector((state) => state.eventDetail);

  console.log(selector);
  useEffect(() => {
    dispatch(getDetail(name));
  }, []);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
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
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Let us handle
              <br className="hidden md:block" />
              your next {selector[0]?.name} {""}
              <span className="inline-block text-deep-purple-accent-400">
                EVENT.
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Here in Klendar©, our first priority is to satisfy our users. We
              value your events and understand the importance of providing
              accurate and meaningful descriptions. Your event, "
              {selector[0]?.description}", is an integral part of our commitment
              to delivering a personalized and user-centric experience.
            </p>
          </div>
          <div className="stats overflow-hidden shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Events listed</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">From January 1st to December 1st</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Users</div>
              <div className="stat-value text-secondary">4,200</div>
              <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">New Registers</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc">↗︎ 90 (14%)</div>
            </div>
          </div>
          <a href="/events" className="btn mt-5 btn-primary">
            Back
          </a>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-56 xl:h-80 w-28 sm:w-48 xl:w-80"
              src={img2}
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-44  xl:h-56 sm:w-40 xl:w-56"
              src={img}
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-72 xl:h-96 sm:w-64 xl:w-96"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt=""
            />
            <div className="px-3 py-5">
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-44  xl:h-56 sm:w-40 xl:w-56"
                src={selector[0]?.image}
                alt="You have not provided an image."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventDetail;
