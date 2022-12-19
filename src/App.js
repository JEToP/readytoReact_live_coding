import Hero from "./components/organisms/Hero";

function App() {
	const subtitle =
		"He crafts responsive websites where technologies meet creativity";
	const workingOn = "Portfolio";

	return (
		<div className="mx-60">
			<div id="home" className="mt-12">
				<Hero subtitle={subtitle} workingOn={workingOn} />
			</div>
		</div>
	);
}

export default App;
