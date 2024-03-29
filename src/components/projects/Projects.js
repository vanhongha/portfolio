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
import {useDispatch, useSelector} from "react-redux";

const PROJECTS = [
	{
		id: "time3",
		name: "Time-3X",
		descriptions: [
			"This is web application used for manage time attendance",
			"In charge of backend API and frontend development",
			"Design documentation in order to preparation phase for development phase",
			"Prepare the necessary documentation for the development phase",
			"Java, Spring Boot, HTML, CSS, Javascript, Oracle",
		],
		photos: [img_t3x]
	},
	{
		id: "cmn",
		name: "コミュなび",
		descriptions: [
			"This is web application used for manage kindergarten",
			"Develop new features and maintain system in order to reduce bugs and issues",
			"In charge of backend API and frontend development",
			"Create both general and specific documentation",
			"PHP, Codeigniter, PHP Library, HTML, CSS, Javascript, Bootstrap, Javascript Library, JQuery, MySQL",
		],
		photos: [img_cmn_1, img_cmn_2]
	},
	{
		id: "iah",
		name: "I am Hero",
		descriptions: [
			"Engaging with UI as the front-end",
			"Built a backend service to manage the game's items using microservice architecture",
			"Worked with Google cloud service to develop notification system and game's events",
			"Improved the game's performance",
			"Unity, C#, Javascript, Node.js, MongoDB, GCS",
		],
		photos: [img_iah_1, img_iah_2]
	},
]

const Projects = () => {
	const dispatch = useDispatch();
	const openModal = useSelector(state => state.openModal);
	const [projectIndex, setProjectIndex] = useState(0);

	const closeModalHander = () => {
		dispatch({type: "CLOSE_MODAL"});
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
				dispatch({type: "OPEN_MODAL"});
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