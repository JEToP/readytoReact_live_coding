import Hero from "./components/organisms/Hero";
import Skills from "./components/organisms/Skills";
import Navigation from "./components/atoms/Navigation";
import Navbar from "./components/organisms/Navbar";

function App() {
	const subtitle =
		"He crafts responsive websites where technologies meet creativity";
	const workingOn = "Portfolio";

	const frontendSkills = ["Javascript", "Typescript", "React"];
	const backendSkills = ["Node JS"];
	const toolsSkills = ["GitHub", "Figma"];

	const FigmaLink = "https://www.figma.com";
	const GitLink = "https://github.com";
	const LinkedinLink = "https://linkedin.com";
	const mail = "elias@example.com";

	const sections = ["home", "skills", "progetti", "about", "contatti"];

	const name = "Elias";

	return (
		<div className="w-full">
			<Navigation
				github={GitLink}
				linkedin={LinkedinLink}
				figma={FigmaLink}
				isLeft="true"
			/>
			<Navigation mail={mail} isLeft="false" />
			<Navbar name={name} sections={sections} />
			<div className="mx-60">
				<div id="home" className="mt-12">
					<Hero subtitle={subtitle} workingOn={workingOn} />
				</div>
				<div id="skills" className="py-24">
					<Skills
						frontend={frontendSkills}
						backend={backendSkills}
						tools={toolsSkills}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
