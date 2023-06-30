import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDays, getMonths, getMonthsPerYear } from "../../Redux/actions";
import SearchBar from "../SearchBar/SearchBar";

const Calendar = () => {
	const dispatch = useDispatch();

	const week = [0, 1, 2, 3, 4, 5, 6];
	const { showedMonths } = useSelector((state) => state);
	const prev = showedMonths.prevMonth;
	const month = showedMonths.actualMonth;
	const next = showedMonths.nextMonth;

	const fecha = new Date();
	const monthNumberTd = fecha.getMonth();
	const yearNumberTd = fecha.getFullYear();
	const [monthNumber, setMonthNumber] = useState(2);
	const [yearNumber, setYearNumber] = useState(2021);

	useEffect(() => {
		dispatch(getDays(monthNumber, yearNumber)).then(() => {
			if (month.length && prev.length && next.length) {
				if (month.day !== "Sunday") {
					while (month[0].day !== "Sunday") {
						let ultimo = prev[prev.length - 1];
						month.unshift(ultimo);
						prev.pop();
					}
				}
				if (month[month.length - 1].day !== "Saturday") {
					console.log(month[month.length - 1].day);
					while (month[month.length - 1].day !== "Saturday") {
						let primero = next[0];
						month.push(primero);
						next.shift();
					}
				}
			}
		});
      dispatch(getMonthsPerYear(yearNumber));
      dispatch(getMonths());
	}, []);

	const monthName = (monthNumer) => {
		switch (monthNumer) {
			case 0:
				return "January";
			case 1:
				return "February";
			case 2:
				return "March";
			case 3:
				return "April";
			case 4:
				return "May";
			case 5:
				return "June";
			case 6:
				return "July";
			case 7:
				return "August";
			case 8:
				return "September";
			case 9:
				return "October";
			case 10:
				return "November";
			case 11:
				return "December";
		}
	};

	const dayName = (dayNumber) => {
		switch (dayNumber) {
			case 0:
				return "Sunday";
			case 1:
				return "Monday";
			case 2:
				return "Tuesday";
			case 3:
				return "Wednesday";
			case 4:
				return "Thursday";
			case 5:
				return "Friday";
			default:
				return "Saturday";
		}
	};

	return (
		<div className='container mx-auto'>
			<div className='wrapper bg-white rounded shadow w-full '>
				<div className='header flex justify-between border-b p-2'>
					<span className='text-4xl font-extralight font-[Poppins] flex items-center w-full justify-around  '>
						<a href='/calendars' className='btn btn-ghost'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='#000000'
								width='30px'
								height='30px'
								viewBox='0 0 1920 1920'
							>
								<path
									d='M1411.824 0c31.17 0 56.47 25.3 56.47 56.471v56.47h169.412c93.403 0 169.412 76.01 169.412 169.412V1920H113V282.353c0-93.402 76.009-169.412 169.412-169.412h169.41v-56.47c0-31.172 25.3-56.47 56.472-56.47s56.47 25.298 56.47 56.47v56.47h790.589v-56.47c0-31.172 25.299-56.47 56.47-56.47Zm282.352 564.705H225.942v1242.353h1468.234V564.705Zm-1016.47 677.648v338.824H338.882v-338.824h338.824Zm451.765 0v338.824H790.647v-338.824h338.824Zm451.764 0v338.824h-338.823v-338.824h338.823Zm-1016.47 112.941H451.824v112.941h112.941v-112.941Zm451.764 0H903.588v112.941h112.941v-112.941Zm451.765 0h-112.941v112.941h112.941v-112.941ZM677.706 790.588v338.824H338.882V790.588h338.824Zm451.765 0v338.824H790.647V790.588h338.824Zm451.764 0v338.824h-338.823V790.588h338.823ZM564.765 903.53H451.824v112.941h112.941V903.53Zm451.764 0H903.588v112.941h112.941V903.53Zm451.765 0h-112.941v112.941h112.941V903.53ZM451.823 225.882H282.412c-31.06 0-56.47 25.3-56.47 56.471v169.412h1468.234V282.353c0-31.172-25.411-56.47-56.47-56.47h-169.412v56.47c0 31.172-25.3 56.471-56.47 56.471-31.172 0-56.471-25.299-56.471-56.47v-56.472H564.765v56.471c0 31.172-25.3 56.471-56.471 56.471-31.171 0-56.471-25.299-56.471-56.47v-56.472Z'
									fill-rule='evenodd'
								/>
							</svg>
						</a>
						{`${monthName(monthNumber)} ${yearNumber}`} <SearchBar />
					</span>
					<div className='buttons'>
						<div className='drawer drawer-end'>
							<input
								id='my-drawer-4'
								type='checkbox'
								className='drawer-toggle'
							/>
							<div className='drawer-content'>
								<label
									htmlFor='my-drawer-4'
									className='drawer-button btn btn-ghost'
								>
									<svg
										width='1.5em'
										fill='black'
										height='1.5em'
										viewBox='0 0 16 16'
										className='bi bi-arrow-left-circle'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
										/>
										<path
											fillRule='evenodd'
											d='M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z'
										/>
										<path
											fillRule='evenodd'
											d='M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z'
										/>
									</svg>
								</label>
							</div>
							<div className='drawer-side'>
								<label htmlFor='my-drawer-4' className='drawer-overlay'></label>
								<ul className='menu p-4 w-80 h-full bg-base-200 text-base-content'>
									<li>
										<a>Nico puto</a>
									</li>
									<li>
										<a>Tier list</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<table className='w-full'>
					<thead>
						<tr>
							{week.map((day) => {
								return (
									<th
										key={day}
										className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs'
									>
										<span className='xl:block font-medium font-[Poppins] lg:block md:block sm:block hidden'>
											{dayName(day)}
										</span>
										<span className='xl:hidden font-[Poppins] lg:hidden md:hidden sm:hidden block'>
											{dayName(day).slice(0, 3)}
										</span>
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody>
						<tr className='text-center h-20'>
							{month.slice(0, 7).map((day) => {
								if (Number(day.fullDate.split("-")[1]) === monthNumber + 1) {
									return (
										<td
											key={day.date}
											className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								} else {
									return (
										<td
											key={day.date}
											className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								}
							})}
						</tr>
						<tr className='text-center h-20'>
							{month.slice(7, 14).map((day) => {
								if (Number(day.fullDate.split("-")[1]) === monthNumber + 1) {
									return (
										<td
											key={day.date}
											className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								} else {
									return (
										<td
											key={day.date}
											className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								}
							})}
						</tr>
						<tr className='text-center h-20'>
							{month.slice(14, 21).map((day) => {
								if (Number(day.fullDate.split("-")[1]) === monthNumber + 1) {
									return (
										<td
											key={day.date}
											className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								} else {
									return (
										<td
											key={day.date}
											className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								}
							})}
						</tr>
						<tr className='text-center h-20'>
							{month.slice(21, 28).map((day) => {
								if (Number(day.fullDate.split("-")[1]) === monthNumber + 1) {
									return (
										<td
											key={day.date}
											className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								} else {
									return (
										<td
											key={day.date}
											className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								}
							})}
						</tr>
						<tr className='text-center h-20'>
							{month.slice(28, 35).map((day) => {
								if (Number(day.fullDate.split("-")[1]) === monthNumber + 1) {
									return (
										<td
											key={day.date}
											className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								} else {
									return (
										<td
											key={day.date}
											className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								}
							})}
						</tr>
						{/* <tr>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 '>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>1</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'>
										<div className='event bg-purple-400 text-white rounded p-1 text-sm mb-1'>
											<span className='event-name'>Meeting</span>
											<span className='time'>12:00~14:00</span>
										</div>
										<div className='event bg-purple-400 text-white rounded p-1 text-sm mb-1'>
											<span className='event-name'>Meeting</span>
											<span className='time'>18:00~20:00</span>
										</div>
									</div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>2</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>3</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>4</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>6</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>7</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'>
										<div className='event bg-blue-400 text-white rounded p-1 text-sm mb-1'>
											<span className='event-name'>Shopping</span>
											<span className='time'>12:00~14:00</span>
										</div>
									</div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500 text-sm'>8</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
						</tr>
						<tr className='text-center h-20'>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>9</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>10</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>12</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>13</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>14</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>15</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500 text-sm'>16</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
						</tr>

						<tr className='text-center h-20'>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>16</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>17</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>18</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>19</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>20</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10  overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>21</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500 text-sm'>22</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
						</tr>

						<tr className='text-center h-20'>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>23</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>24</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>25</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>26</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>27</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>28</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500 text-sm'>29</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
						</tr>
						<tr className='text-center h-20'>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>30</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>31</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>1</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>2</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>3</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500'>4</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
							<td className='border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'>
								<div className='flex flex-col h-40  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
									<div className='top h-5 w-full'>
										<span className='text-gray-500 text-sm'>5</span>
									</div>
									<div className='bottom flex-grow h-30 py-1 w-full cursor-pointer'></div>
								</div>
							</td>
						</tr> */}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Calendar;
