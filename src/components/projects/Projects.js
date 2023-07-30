import React, {useEffect} from "react";

import Title from "../UI/Title";
import ProjectFolder from "./ProjectFolder";

import classes from "./Projects.module.css";
import classesFolder from "./ProjectFolder.module.css";

import folder from "../../assets/folder.png";
import folder_hover from "../../assets/folder-hover.png";

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
	useEffect(() => {
		const folders = document.getElementsByClassName("project-folder");
		for (let f of folders) {
			f.classList.add(classesFolder.folder);
			const see_more = f.querySelector(".see-more");
			see_more.addEventListener("mouseover", (event) => {
				f.classList.remove(classesFolder.folder);
				f.classList.add(classesFolder.hover);
			});

			see_more.addEventListener("mouseout", (event) => {
				f.classList.add(classesFolder.folder);
				f.classList.remove(classesFolder.hover);
			});
		}
	});

	return (
		<div>
			<Title>PROJECTS</Title>
			<div className={classes.content}>
				{PROJECTS.map(project => {
					return <ProjectFolder
						key={project.id}
						project={project}
						folder={folder}
						folder_hover={folder_hover}
					/>;
				})}
			</div>
		</div>
	);
}

export default Projects;