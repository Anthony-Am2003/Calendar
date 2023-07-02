import MCalendar from "../../components/MCalendar/MCalendar";
import Events from "../../components/AllEvents/Events";
const Month = () => {
  return (
		<div className="flex flex-col justify-evenly">
			<div><MCalendar /></div>
			<div className="my-10"><Events /></div>
		</div>
	);
}
export default Month;