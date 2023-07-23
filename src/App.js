import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";

function App() {
	return (
		<div className={"App"}>
			<Header/>
			<About/>
			<Education/>
			<Skills/>
		</div>
	);
}

export default App;
