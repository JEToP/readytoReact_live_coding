import Letterize from "letterizejs";
import anime from "animejs";
import "./AboutAnimation.css";
import { useEffect } from "react";

export default function AboutAnimation(props) {
	useEffect(() => {
		const total = String(props.name).length + String(props.surname).length;
		const test = new Letterize({
			targets: "#animate-me",
		});

		const animation = anime.timeline({
			targets: test.listAll,
			delay: anime.stagger(120, {
				grid: [total + 1, 10],
				from: "center",
			}),
			loop: true,
		});

		animation
			.add({ scale: 0.5 })
			.add({ letterSpacing: "10px" })
			.add({
				scale: 1,
			})
			.add({
				letterSpacing: "6px",
			});
	});

	return (
		<div className="animation-box">
			<div>
				<div id="animate-me">
					{props.name}&{props.surname}
				</div>
				<div id="animate-me">
					{props.surname}&{props.name}
				</div>
				<div id="animate-me">
					{props.name}&{props.surname}
				</div>
				<div id="animate-me">
					{props.surname}&{props.name}
				</div>
				<div id="animate-me">
					{props.name}&{props.surname}
				</div>
				<div id="animate-me">
					{props.surname}&{props.name}
				</div>
				<div id="animate-me">
					{props.name}&{props.surname}
				</div>
				<div id="animate-me">
					{props.surname}&{props.name}
				</div>
				<div id="animate-me">
					{props.name}&{props.surname}
				</div>
				<div id="animate-me">
					{props.surname}&{props.name}
				</div>
			</div>
		</div>
	);
}
