import React, {useEffect} from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";
import SkillTag from "./SkillTag";

import classes from "./Skills.module.css"
import commonClasses from "../UI/common.module.css"

const PROGRAMMING_LANGUAGES = [
	"Javascript",
	"C++",
	"C#",
	"PHP",
	"Golang",
	"SQL"
]

const SKILLS = [
	"System Development",
	"Web Development"
]

const FRAMEWORKS = [
	"Codeigniter",
	"Laravel",
	"React"
]

const OTHERS = [
	"Git",
	"MySQL",
	"MongoDB",
	"MSSQL"
]

const Skills = () => {
	useEffect(() => {
		const skillsTextCard = document.getElementsByClassName(classes["skills-text-card"])[0];
		const skillsContentCard = document.getElementsByClassName(classes["skills-content-card"])[0];
		const leftPanel = document.getElementsByClassName(classes["left-panel"])[0];

		skillsTextCard.style.height = skillsContentCard.offsetHeight + "px";
		leftPanel.style.height = skillsContentCard.offsetHeight + "px";
	});

	return (
		<div className={`${classes.skills} ${commonClasses.clearfix}`}>
			<Card className={classes["skills-content-card"]}>
				<div className={classes["left-panel"]}></div>
				<div className={classes["skills-content"]}>
					<div>
						<span className={classes["skills-title"]}>Programming Languages</span><br/>
						{PROGRAMMING_LANGUAGES.map(language => {
							return <SkillTag key={language} tag={language} />;
						})}
					</div>
					<div>
						<span className={classes["skills-title"]}>Skills</span><br/>
						{SKILLS.map(skill => {
							return <SkillTag key={skill} tag={skill} />;
						})}
					</div>
					<div>
						<span className={classes["skills-title"]}>Frameworks</span><br/>
						{FRAMEWORKS.map(frw => {
							return <SkillTag key={frw} tag={frw} />;
						})}
					</div>
					<div>
						<span className={classes["skills-title"]}>Others</span><br/>
						{OTHERS.map(skill => {
							return <SkillTag key={skill} tag={skill} />;
						})}
					</div>
				</div>

			</Card>
			<Card className={classes["skills-text-card"]}>
				<Title className={classes["skills-text"]}>SKILLS</Title>
			</Card>
		</div>
	);
}

export default Skills;