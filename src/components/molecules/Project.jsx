import ProjectCard from "../atoms/ProjectCard";
import ProjectDescription from "../atoms/ProjectDescription";

export default function Project(props) {
	return props.float === "right" ? (
		<div className="relative grid items-center gap-2.5 grid-cols-12	h-[350px] mb-24">
			<div className="h-full col-start-1 col-end-8 row-start-1">
				<ProjectCard image={props.image} />
			</div>
			<div className="block col-start-7 col-end-13 row-start-1 h-fit">
				<ProjectDescription
					title={props.title}
					description={props.description}
					languages={props.languages}
					link={props.link}
					github={props.github}
					float={props.float}
				/>
			</div>
		</div>
	) : (
		<div className="relative grid items-center gap-2.5 grid-cols-12	h-[350px] mb-24">
			<div className="h-full col-start-6 col-end-13 row-start-1">
				<ProjectCard image={props.image} />
			</div>
			<div className="block col-start-1 col-end-7 row-start-1 h-fit">
				<ProjectDescription
					title={props.title}
					description={props.description}
					languages={props.languages}
					link={props.link}
					github={props.github}
					float={props.float}
				/>
			</div>
		</div>
	);
}
