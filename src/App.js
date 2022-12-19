import Hero from "./components/organisms/Hero";
import Skills from "./components/organisms/Skills";

function App() {
	const subtitle =
		"He crafts responsive websites where technologies meet creativity";
	const workingOn = "Portfolio";

	const frontendSkills = ["Javascript", "Typescript", "React"];
	const backendSkills = ["Node JS"];
	const toolsSkills = ["GitHub", "Figma"];

	return (
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
	);
}

export default App;
