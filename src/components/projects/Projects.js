import React, {useEffect, useState} from "react";

import ProjectModal from "./modal/ProjectModal";
import Title from "../UI/Title";
import ProjectFolder from "./ProjectFolder";

import classes from "./Projects.module.css";
import classesFolder from "./ProjectFolder.module.css";

import folder from "../../assets/folder.png";
import folder_hover from "../../assets/folder-hover.png";

import img_iah_1 from "../../assets/projects_imgs/iah_1.jpeg";
import img_iah_2 from "../../assets/projects_imgs/iah_2.jpeg";
import img_cmn_1 from "../../assets/projects_imgs/cmn_1.jpg";
import img_cmn_2 from "../../assets/projects_imgs/cmn_2.png";
import img_t3x from "../../assets/projects_imgs/t3x.png";

const PROJECTS = [
	{
		id: "fe",
		name: "Flyer Editor",
		descriptions: [
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
		],
		photos: []
	},
	{
		id: "time3",
		name: "Time-3X",
		descriptions: [
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
		],
		photos: [img_t3x]
	},
	{
		id: "cmn",
		name: "コミュなび",
		descriptions: [
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
		],
		photos: [img_cmn_1, img_cmn_2]
	},
	{
		id: "iah",
		name: "I am Hero",
		descriptions: [
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
			"Improve your English skills in social situations",
		],
		photos: [img_iah_1, img_iah_2]
	},
]

const Projects = () => {
	const [openModal, setOpenModal] = useState(false);
	const [projectIndex, setProjectIndex] = useState(0);

	const closeModalHander = () => {
		setOpenModal(false);
		document.body.style.overflow = 'unset';
	}

	const setProjectIndexHandler = (value) => {
		setProjectIndex(parseInt(value));
	}

	useEffect(() => {
		const folders = document.getElementsByClassName("project-folder");
		for (let f of folders) {
			f.classList.add(classesFolder.folder);
			const see_more = f.querySelector(".see-more");
			see_more.addEventListener("click", (event) => {
				setOpenModal(true);
				document.body.style.overflow = 'hidden';
				let index = event.target.closest('.project-folder').id.split('-')[1];
				setProjectIndex(index);
			});

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
		<div id={"projects"} className={classes.projects}>
			<ProjectModal
				selectingIndex={projectIndex}
				onCloseModal={closeModalHander}
				projects={PROJECTS}
				setProjectIndex={setProjectIndexHandler}
				isOpen={openModal}
			/>
			<Title>PROJECTS</Title>
			<div className={classes.content}>
				{PROJECTS.map((project, index) => {
					return <ProjectFolder
						index={index}
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