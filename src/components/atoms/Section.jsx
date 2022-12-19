import { scrollToElement } from "../scrollAnimations";

export default function Section(props) {
	return (
		<div className="flex">
			<button
				className="ml-16 text-lg font-fira text-gray focus:text-white focus:font-bold"
				onClick={(event) => {
					scrollToElement(props.title);
				}}
			>
				<span className="text-green">#</span>
				{props.title}
			</button>
		</div>
	);
}
