import './App.css';
import Header from "./components/header/Header";
import About from "./components/about/About";
import Education from "./components/education/Education";

function App() {
	return (
		<div className={"App"}>
			<Header/>
			<About/>
			<Education/>
		</div>
	);
}

export default App;
