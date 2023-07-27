import React, {useEffect} from "react";
import ReactDOM from "react-dom";

import Title from "../UI/Title";
import ExperienceCard from "./ExperienceCard";

import background from "../../assets/BG-exp.png";

import classes from "./Experiences.module.css";

const EXPERIENCES = [
	{
		id: "imba",
		period: "02/2018 - 02/2019",
		company_name: "Imba Games",
		title: "Game Developer",
		descriptions: [
			"Developed mobile games with Unity(C#)",
			"Optimised the game's performance by using the Design Pattern",
			"Developed game's server-side using Node.js"
		]
	},
	{
		id: "ibs",
		period: "03/2020 - 08/2022",
		company_name: "IB System Co., Ltd",
		title: "System Engineer",
		descriptions: [
			"Developed Web Applications with PHP, Javascript",
			"Optimised the game's performance by using the Design Pattern",
			"Developed game's server-side using Node.js"
		]
	},
	{
		id: "rk",
		period: "08/2022 - Present",
		company_name: "Rikkeisoft",
		title: "System Engineer",
		descriptions: [
			"Developed mobile games with Unity(C#)",
			"Optimised the game's performance by using the Design Pattern",
			"Developed game's server-side using Node.js"
		]
	}
]

const ExperiencesBG = () => {
	return (<div id={"experiences-bg"} className={classes.background} style={{backgroundImage: `url(${background})`}}></div>);
}

const Experiences = () => {
	const root = document.getElementById("root");

	useEffect(() => {
		const exp_element = document.getElementById("experiences");
		const anchor_element = document.getElementById(EXPERIENCES[0].id);
		const exp_bg = document.getElementById("experiences-bg");
		exp_bg.style.top = (exp_element.offsetTop + anchor_element.offsetTop + anchor_element.offsetHeight / 2) + "px";
		exp_bg.style.height = (EXPERIENCES.length - 1) * (anchor_element.offsetHeight + 50) + "px";
	})

	return (
		<div id={"experiences"} className={classes.experiences}>
			<Title>WORK HISTORY</Title>
			<div>
				{ReactDOM.createPortal(<ExperiencesBG/>, root)}
				{EXPERIENCES.map(experience => {
					return <ExperienceCard id={experience.id} key={experience.id} experience={experience} />
				})}
			</div>
		</div>
	);
}

export default Experiences;