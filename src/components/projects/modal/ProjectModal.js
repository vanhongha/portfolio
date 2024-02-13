import React from "react";
import ReactModal from 'react-modal';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ProjectTitle from "../ProjectTitle";

import {faLeftLong, faRightLong} from '@fortawesome/free-solid-svg-icons'

import classes from "./ProjectModal.module.css";
import commonClasses from "../../UI/common.module.css";

import "./ProjectModalAnimation.css";

const ModalOverlay = (props) => {
	const project_num = props.projects.length;
	const current_project_photos = props.projects[props.selectingIndex].photos;
	const current_project = props.projects[props.selectingIndex];
	let dots = [];

	const onChangeProject = (index) => {
		props.setProjectIndex(parseInt(index));
	}

	const goToPrevProject = () => {
		if (parseInt(props.selectingIndex) > 0) {
			props.setProjectIndex(parseInt(props.selectingIndex) - 1);
		}
	}

	const goToNextProject = () => {
		if (parseInt(props.selectingIndex) < project_num - 1) {
			props.setProjectIndex(parseInt(props.selectingIndex) + 1);
		}
	}

	for (let i = 0; i < project_num; i++) {
		dots[i] = <div
			key={i}
			className={`${classes["step-dot"]}
					${i === parseInt(props.selectingIndex) && classes.active}`}
			onClick={() => onChangeProject(i)}
		></div>;
	}

	return (
		<ReactModal
			className={classes.modal}
			isOpen={props.isOpen}
			style={{
				overlay: {
					backgroundColor: 'rgba(0, 0, 0, 0.75)'
				},
			}}
			onRequestClose={() => {
				props.onClickClose();
			}}
			shouldCloseOnOverlayClick={true}
			preventScroll={true}
			backdrop={"static"}
		>
			<div className={classes.header}>
				<ProjectTitle
					className={`${classes["project-title"]} ${commonClasses.clearfix}`}
					title={current_project.name}/>
				<button className={classes.close} onClick={props.onClickClose}>✖</button>
			</div>
			<div className={classes.body}>
				{current_project_photos.length > 0 &&
					<img className={classes["modal-image"]}
						 draggable={"false"}
						 src={current_project_photos[0]} alt="Image"/>}
				<div className={classes.text}>
					<p className={classes.description}>
						This is my personal portfolio website showcasing my skills and projects. It was built using HTML, CSS, and JavaScript.
					</p>
					<p className={classes["what-i-did"]}>
						What I did in this project:
					</p>
					<ul>
						{current_project.descriptions.map((des, index) => {
							return <li key={index}>{des}</li>
						})}
					</ul>
				</div>
			</div>
			<footer>
				<div className={classes.actions}>
					<button
						className={classes["back-action"]}
						onClick={goToPrevProject}
					><FontAwesomeIcon size={"2xl"} icon={faLeftLong}/></button>
					<button
						className={classes["forward-action"]}
						onClick={goToNextProject}
					><FontAwesomeIcon size={"2xl"} icon={faRightLong}/></button>
				</div>
				<div className={classes["step-dots"]}>
					{dots.map(dot => dot)}
				</div>
			</footer>
		</ReactModal>
	);
}

ReactModal.setAppElement("#overlays");

const ProjectModal = (props) => {
	return (
		<>
			<ModalOverlay
				onClickClose={props.onCloseModal}
				selectingIndex={props.selectingIndex}
				projects={props.projects}
				setProjectIndex={props.setProjectIndex}
				isOpen={props.isOpen}
			/>
		</>
	);
}

export default ProjectModal;