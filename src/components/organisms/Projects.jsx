import Project from "../molecules/Project";
import Heading from "../atoms/Heading";

export default function Projects() {
	return (
		<div className="mb-24">
			<Heading section="progetti" />
			<Project
				float="right"
				title="JEToP Theme"
				image="bg-first-project"
				description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
				languages="TypeScript React Tailwind"
				link={"https://www.jetop.com"}
				github={"https://github.com"}
			/>
			<Project
				float="left"
				title="Nuovo progetto"
				image="bg-first-project"
				description="A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
				languages="TypeScript React Tailwind"
				link={"https://www.jetop.com"}
				github={"https://github.com"}
			/>
		</div>
	);
}
