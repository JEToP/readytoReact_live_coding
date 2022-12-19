import Hero from "./components/organisms/Hero";
import Skills from "./components/organisms/Skills";
import Navigation from "./components/atoms/Navigation";
import Navbar from "./components/organisms/Navbar";
import Projects from "./components/organisms/Projects";
import About from "./components/organisms/About";
import Footer from "./components/organisms/Footer";

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
	const surname = "Surname";

	const firstParagraph =
		"I’m a self-taught front-end developer based in Kyiv, Ukraine. I candevelop responsive websites from scratch and raise them into moder user-friendly web experiences.";
	const secondParagraph =
		"Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.";

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
				<div id="progetti" className="py-24">
					<Projects />
				</div>

				<div id="about" className="py-24">
					<About
						name={name}
						surname={surname}
						firstParagraph={firstParagraph}
						secondParagraph={secondParagraph}
					/>
				</div>
			</div>
			<Footer
				mail={mail}
				github={GitLink}
				linkedin={LinkedinLink}
				figma={FigmaLink}
				name={name}
			/>
		</div>
	);
}

export default App;
