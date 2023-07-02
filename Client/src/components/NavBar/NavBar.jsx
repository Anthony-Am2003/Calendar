import Month_Year from "./Month_Year/Month_Year";
import SearchDate from "./SearchDate/SearchDate";
import Form from "./Form/Form";

const NavBar = ({monthNumber, setMonthNumber, yearNumber, setYearNumber, handleClickPrev, handleClickNext}) => {
	return (
		<div className='header flex justify-between border-b p-2'>
			<span className='text-4xl font-extralight font-[Poppins] flex items-center w-full justify-around  '>
				<a href='/year' className='btn btn-ghost'>
					<svg xmlns='http://www.w3.org/2000/svg' fill='#000000' width='30px' height='30px' viewBox='0 0 1920 1920'>
						<path
							d='M1411.824 0c31.17 0 56.47 25.3 56.47 56.471v56.47h169.412c93.403 0 169.412 76.01 169.412 169.412V1920H113V282.353c0-93.402 76.009-169.412 169.412-169.412h169.41v-56.47c0-31.172 25.3-56.47 56.472-56.47s56.47 25.298 56.47 56.47v56.47h790.589v-56.47c0-31.172 25.299-56.47 56.47-56.47Zm282.352 564.705H225.942v1242.353h1468.234V564.705Zm-1016.47 677.648v338.824H338.882v-338.824h338.824Zm451.765 0v338.824H790.647v-338.824h338.824Zm451.764 0v338.824h-338.823v-338.824h338.823Zm-1016.47 112.941H451.824v112.941h112.941v-112.941Zm451.764 0H903.588v112.941h112.941v-112.941Zm451.765 0h-112.941v112.941h112.941v-112.941ZM677.706 790.588v338.824H338.882V790.588h338.824Zm451.765 0v338.824H790.647V790.588h338.824Zm451.764 0v338.824h-338.823V790.588h338.823ZM564.765 903.53H451.824v112.941h112.941V903.53Zm451.764 0H903.588v112.941h112.941V903.53Zm451.765 0h-112.941v112.941h112.941V903.53ZM451.823 225.882H282.412c-31.06 0-56.47 25.3-56.47 56.471v169.412h1468.234V282.353c0-31.172-25.411-56.47-56.47-56.47h-169.412v56.47c0 31.172-25.3 56.471-56.47 56.471-31.172 0-56.471-25.299-56.471-56.47v-56.472H564.765v56.471c0 31.172-25.3 56.471-56.471 56.471-31.171 0-56.471-25.299-56.471-56.47v-56.472Z'
							fillRule='evenodd'
						/>
					</svg>
				</a>
        <Month_Year monthNumber={monthNumber} setMonthNumber={setMonthNumber} yearNumber={yearNumber} setYearNumber={setYearNumber} handleClickPrev={handleClickPrev} handleClickNext={handleClickNext} />
        <SearchDate />
			</span>
			<Form />
		</div>
	);
};

export default NavBar;
