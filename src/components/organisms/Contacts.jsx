import Heading from "../atoms/Heading";
import Form from "../molecules/Form.jsx";
import rocket from "../../assets/img/rocket.png";

export default function Contacts(props) {
	return (
		<div className="mb-24">
			<Heading section="contatti" />
			<div className="relative grid items-center grid-cols-2 gap-4">
				<div>
					<div className="w-[500px]">
						<img src={rocket} alt="immagine razzo form contatti" />
					</div>
				</div>
				<div className="mr-0 ">
					<p className="w-fit h-[90px] text-base text-gray font-fira text-right mb-12">
						I’m interested in freelance opportunities especially ambitious or
						large projects. However, if you have other request or question,
						don’t hesitate to use the form.
					</p>
					<Form mail={props.mail} />
				</div>
			</div>
		</div>
	);
}
