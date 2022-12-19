import Container from "../molecules/Container";
import Heading from "../atoms/Heading";

export default function Skills(props) {
	return (
		<div>
			<Heading section="skills" />
			<div className="flex flex-row items-center justify-between">
				<Container containerTitle="Frontend" elements={props.frontend} />
				<Container
					containerTitle="Backend"
					variant="center"
					elements={props.backend}
				/>
				<Container containerTitle="Tools" elements={props.tools} />
			</div>
		</div>
	);
}
