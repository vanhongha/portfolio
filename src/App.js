import {Provider} from "react-redux";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import Experiences from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";

import store from "./store";

import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className={"App"}>
				<Header/>
				<About/>
				<Education/>
				<Skills/>
				<Experiences/>
				<Projects/>
			</div>
		</Provider>
	);
}

export default App;
