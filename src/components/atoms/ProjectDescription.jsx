import { ReactComponent as Github } from "../../assets/svg/Github.svg";
import { ReactComponent as ExternalLink } from "../../assets/svg/ExternalLink.svg";

export default function ProjectDescription(props) {
	return props.float === "right" ? (
		<div className={`w-full font-fira text-white text-right float-right`}>
			<p className="text-xs text-green">Featured Project</p>
			<h1 className="text-2xl font-bold font-poppins">{props.title}</h1>
			<div className="mt-4 p-6 font-medium bg-[#323232] font-poppins h-36">
				{props.description}
			</div>
			<p className="mt-3 text-sm">{props.languages}</p>
			<a target="_blank" rel="noopener noreferrer" href={props.link}>
				<ExternalLink className="mt-2.5 ml-4 float-right h-5 w-5 transition duration-500 ease-in-out fill-gray hover:fill-green" />
			</a>
			<a target="_blank" rel="noopener noreferrer" href={props.github}>
				<Github className="mt-2.5 float-right h-5 w-5 transition duration-500 ease-in-out fill-gray hover:fill-green" />
			</a>
		</div>
	) : (
		<div className={`w-full font-fira text-white float-left text-left`}>
			<p className="text-xs text-green">Featured Project</p>
			<h1 className="text-2xl font-bold font-poppins">{props.title}</h1>
			<div className="mt-4 p-6 font-medium bg-[#323232] font-poppins h-36">
				{props.description}
			</div>
			<p className="mt-3 text-sm">{props.languages}</p>
			<a target="_blank" rel="noopener noreferrer" href={props.github}>
				<Github className="mt-2.5 mr-4 float-left h-5 w-5 transition duration-500 ease-in-out fill-gray hover:fill-green" />
			</a>
			<a target="_blank" rel="noopener noreferrer" href={props.link}>
				<ExternalLink className="mt-2.5 float-left h-5 w-5 transition duration-500 ease-in-out fill-gray hover:fill-green" />
			</a>
		</div>
	);
}
