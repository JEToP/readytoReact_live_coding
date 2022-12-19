import Section from "../atoms/Section";
import logo from "../../assets/img/jetop.png";

export default function Navbar(props) {
	return (
		<div className="sticky top-0 z-20 flex flex-row justify-between w-full px-32 py-5 bg-black/50 backdrop-blur-sm">
			<div className="flex align-middle">
				<div>
					<img src={logo} alt="personal portfolio logo" className="w-9" />
				</div>
				<div className="mx-2 text-2xl font-bold text-white">{props.name}</div>
			</div>
			<div className="flex">
				{props.sections.map((section) => {
					return <Section title={section} />;
				})}
			</div>
		</div>
	);
}
