import React from "react";

import Title from "../UI/Title";
import ProjectFolder from "./ProjectFolder";

import classes from "./Projects.module.css";

const PROJECTS = [
	{
		id: "iah",
		name: "I am Hero",
		descriptions: [
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
		]
	},
	{
		id: "cmn",
		name: "コミュなび",
		descriptions: [
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
		]
	},
	{
		id: "time3",
		name: "Time-3X",
		descriptions: [
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
		]
	},
	{
		id: "fe",
		name: "Flyer Editor",
		descriptions: [
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
		]
	},
]

const Projects = () => {
	return (
		<div>
			<Title>PROJECTS</Title>
			<div className={classes.content}>
				{PROJECTS.map(project => {
					return <ProjectFolder key={project.id} project={project}/>
				})}
			</div>
		</div>
	);
}

export default Projects;