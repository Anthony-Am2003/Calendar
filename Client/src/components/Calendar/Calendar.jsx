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
	const dayNumberTd = fecha.getDate();
	const monthNumberTd = fecha.getMonth();
	const yearNumberTd = fecha.getFullYear();
	const today = `${yearNumberTd}-${monthNumberTd + 1}-${dayNumberTd}`;
	const [monthNumber, setMonthNumber] = useState(monthNumberTd);
	const [yearNumber, setYearNumber] = useState(yearNumberTd);

	useEffect(() => {
		dispatch(getDays(monthNumber, yearNumber));
		dispatch(getMonthsPerYear(yearNumber));
		dispatch(getMonths());
	}, [monthNumber, yearNumber]);

	if (month.length && prev.length && next.length) {
		if (month.day !== "Sunday") {
			while (month[0].day !== "Sunday") {
				let ultimo = prev[prev.length - 1];
				month.unshift(ultimo);
				prev.pop();
			}
		}
		if (month[month.length - 1].day !== "Saturday") {
			while (month[month.length - 1].day !== "Saturday") {
				let primero = next[0];
				month.push(primero);
				next.shift();
			}
		}
	}
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

	const handleClickPrev = () => {
		if (monthNumber === 0) {
			setMonthNumber(monthNumber + 11);
			setYearNumber(yearNumber - 1);
		} else setMonthNumber(monthNumber - 1);
	};

	const handleClickNext = () => {
		if (monthNumber === 11) {
			setMonthNumber(monthNumber - 11);
			setYearNumber(yearNumber + 1);
		} else setMonthNumber(monthNumber + 1);
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
						<div className='w-1/3 flex flex-row justify-between'>
							<button
								onClick={handleClickPrev}
								className='p-1 mr-4 hover:scale-110 duration-200'
							>
								<svg
									width='0.5em'
									fill='black'
									height='1em'
									viewBox='0 0 16 16'
									className='bi bi-arrow-left-circle'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
									/>
									<path
										fill-rule='evenodd'
										d='M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z'
									/>
									<path
										fill-rule='evenodd'
										d='M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z'
									/>
								</svg>
							</button>
							<span className='text-center'>
								{`${monthName(monthNumber)} ${yearNumber}`}
							</span>
							<button
								onClick={handleClickNext}
								className='p-1 ml-4 hover:scale-110 duration-300'
							>
								<svg
									width='0.5em'
									fill='black'
									height='1em'
									viewBox='0 0 16 16'
									class='bi bi-arrow-right-circle'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fill-rule='evenodd'
										d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'
									/>
									<path
										fill-rule='evenodd'
										d='M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z'
									/>
									<path
										fill-rule='evenodd'
										d='M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z'
									/>
								</svg>
							</button>
						</div>
						<SearchBar />
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
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<circle
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											stroke-width='2'
										/>
										<path
											d='M12 8V16M8 12H16'
											stroke='currentColor'
											stroke-width='2'
										/>
									</svg>
								</label>
							</div>
							<div className='drawer-side'>
								<label htmlFor='my-drawer-4' className='drawer-overlay'></label>
								<ul className='menu p-4 w-[40vw] h-full from-[#076585]  to-[#fff] bg-gradient-to-b text-base-content'>
									<form>
										<h1 className=' font-[Poppins] text-4xl drop-shadow-lg shadow-black mb-10 text-white  mt-5 '>
											Add your custom event.
										</h1>
										<div className='grid  gap-6 mb-6 md:grid-cols-2'>
											<div>
												<label
													for='first_name'
													className='block mb-2 text-sm font-medium font-[Poppins] text-white dark:text-white'
												>
													Name
												</label>
												<input
													type='text'
													id='first_name'
													className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
													placeholder=''
													required
												/>
											</div>
											<div>
												<label
													for='last_name'
													className='block mb-2 text-sm font-medium font-[Poppins] text-white dark:text-white'
												>
													Initial Date
												</label>
												<input
													type='date'
													id='last_name'
													className='bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
													placeholder=''
													required
												/>
											</div>
											<div>
												<label
													for='company'
													className='block mb-2 text-sm font-[Poppins] font-medium text-white dark:text-white'
												>
													Final Date
												</label>
												<input
													type='date'
													id='company'
													className='bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
													placeholder=''
													required
												/>
											</div>
											<div>
												<label
													for='phone'
													className='block mb-2 text-sm font-[Poppins] font-medium text-white dark:text-white'
												>
													Image
												</label>
												<input
													type='tel'
													id='phone'
													className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
													placeholder=''
													required
												/>
											</div>
											<div>
												<label
													for='website'
													className='block mb-2  font-[Poppins] text-sm font-medium text-white dark:text-white'
												>
													Description
												</label>
												<input
													type='url'
													id='website'
													className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
													placeholder=''
													required
												/>
											</div>
											<div>
												<label
													for='visitors'
													className='block mb-2 text-sm font-[Poppins] font-medium text-white dark:text-white'
												>
													Location
												</label>
												<input
													type='number'
													id='visitors'
													className='bg-gray-50 border  border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
													placeholder=''
													required
												/>
											</div>
										</div>
										<div className=' mb-6'>
											<label
												for='email'
												className='block mb-2 text-sm font-[Poppins] font-medium text-white dark:text-white'
											>
												Category
											</label>
											<input
												type='email'
												id='email'
												className='bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
												placeholder=''
												required
											/>
										</div>
										<div className='flex items-start mb-6'>
											<div className='flex items-center h-5'>
												<input
													id='remember'
													type='checkbox'
													value=''
													className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
													required
												/>
											</div>
											<label
												for='remember'
												className='ml-2 text-sm font-medium font-[Poppins] text-gray-900 dark:text-gray-300'
											>
												Remind me of my {""}
												<a
													href='#'
													className='text-blue-600 font-[Poppins] hover:underline dark:text-blue-500'
												>
													new event.
												</a>
												.
											</label>
										</div>
										<button
											type='submit'
											className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
										>
											Add event
										</button>
									</form>
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
											className='border p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='h-5 w-full'>
													<div
														className={
															today !== day.fullDate
																? "mx-auto w-16 rounded- border-2 border-red-700"
																: "text-gray-500"
														}
													>
														{day.date}
													</div>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								} else {
									return (
										<td
											key={day.date}
											className='border bg-gray-100 p-1 h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
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
											className='border p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								} else {
									return (
										<td
											key={day.date}
											className='border bg-gray-100 p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
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
											className='border p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								} else {
									return (
										<td
											key={day.date}
											className='border bg-gray-100 p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
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
											className='border p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								} else {
									return (
										<td
											key={day.date}
											className='border bg-gray-100 p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
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
											className='border p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								} else {
									return (
										<td
											key={day.date}
											className='border bg-gray-100 p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								}
							})}
						</tr>
						<tr className='text-center h-20'>
							{month.slice(35, 42).map((day) => {
								if (Number(day.fullDate.split("-")[1]) === monthNumber + 1) {
									return (
										<td
											key={day.date}
											className='border p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								} else {
									return (
										<td
											key={day.date}
											className='border bg-gray-100 p-1 h-36 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300'
										>
											<div className='flex flex-col h-36  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden'>
												<div className='top h-5 w-full'>
													<span className='text-gray-500'>{day.date}</span>
												</div>
												<div className='bottom flex-grow h-36 py-1 w-full cursor-pointer'></div>
											</div>
										</td>
									);
								}
							})}
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Calendar;
