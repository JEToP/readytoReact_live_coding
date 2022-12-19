import logo from "../../assets/img/jetop.png";
import { ReactComponent as Github } from "../../assets/svg/Github.svg";
import { ReactComponent as Figma } from "../../assets/svg/Figma.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/Linkedin.svg";

export default function Footer(props) {
	return (
		<div className="flex flex-col text-white font-fira border-t-[1px] border-gray px-40">
			<div className="flex justify-between mt-10 align-center">
				<div className="flex flex-col ">
					<div className="flex text-left text-white">
						<div>
							<img
								src={logo}
								alt="personal portfolio logo"
								className="w-[35px] mr-[10px]"
							/>
						</div>
						<div className="text-2xl font-bold">{props.name}</div>
						<div className="mt-2 ml-10 text-base text-center text-gray">
							<a href={"mailto:" + props.mail}>{props.mail}</a>
						</div>
					</div>
					<div className="mt-3 text-base">Sviluppatore frontend</div>
				</div>
				<div className="flex flex-col">
					<div className="flex justify-center mb-3 text-2xl font-bold">
						Social
					</div>
					<div className="flex flex-row justify-between">
						<a target="_blank" rel="noopener noreferrer" href={props.github}>
							<Github className="w-5 h-5 transition duration-500 ease-in-out fill-gray hover:fill-green" />
						</a>
						<a target="_blank" rel="noopener noreferrer" href={props.figma}>
							<Figma className="w-5 h-5 transition duration-500 ease-in-out fill-gray hover:fill-green" />
						</a>
						<a target="_blank" rel="noopener noreferrer" href={props.linkedin}>
							<Linkedin className="w-5 h-5 transition duration-500 ease-in-out fill-gray hover:fill-green" />
						</a>
					</div>
				</div>
			</div>

			<div className="mt-10 mb-8 text-base text-center text-gray">
				Designed with ❤️ by{" "}
				<a target="_blank" rel="noopener noreferrer" href="https://jetop.com">
					JEToP
				</a>
			</div>
		</div>
	);
}
