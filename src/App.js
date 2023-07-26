import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";

function App() {
	return (
		<div className={"App"}>
			<Header/>
			<About/>
			<Education/>
			<Skills/>
			<Experiences/>
		</div>
	);
}

export default App;
