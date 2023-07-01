import { dayName } from "../../Helpers/Format";

const DaysName = ({ week }) => {
  return (
		<tr>
			{week.map((day) => {
				return (
					<th key={day} className='p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs'>
						<span className='xl:block font-medium font-[Poppins] lg:block md:block sm:block hidden'>{dayName(day)}</span>
						<span className='xl:hidden font-[Poppins] lg:hidden md:hidden sm:hidden block'>{dayName(day).slice(0, 3)}</span>
					</th>
				);
			})}
		</tr>
	);
};

export default DaysName;