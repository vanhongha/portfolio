import React from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";

import classes from "./Skills.module.css"
import SkillTag from "./SkillTag";

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
	return (
		<div style={{marginTop:50}}>
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