import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import AboutAnimation from "../molecules/AboutAnimation/AboutAnimation";

export default function About(props) {
	return (
		<div className="">
			<Heading section={"About"} />
			<div className="flex flex-row">
				<div className="flex flex-col justify-center w-1/2 text-base text-gray font-fira">
					<p className="mb-6 ">Hi, I'm {props.name}!</p>
					<p className="mb-6">{props.firstParagraph}</p>
					<p className="mb-12 ">{props.secondParagraph}</p>
					<div>
						<Button title={"Contattami"} type="toSection" section="contatti" />
					</div>
				</div>
				<div className="flex justify-end w-1/2">
					<AboutAnimation name={props.name} surname={props.surname} />
				</div>
			</div>
		</div>
	);
}
