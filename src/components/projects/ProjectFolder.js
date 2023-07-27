import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import ProjectTitle from "./ProjectTitle";

import folder from "../../assets/folder.png";

import classes from "./ProjectFolder.module.css";

const ProjectFolder = (props) => {
	return (
		<div className={classes["project-folder"]} style={{backgroundImage: `url(${folder})`}}>
			<ProjectTitle title={props.project.name}/>
			<span className={classes["see-more"]}>See more <FontAwesomeIcon size={"sm"} icon={faArrowUpRightFromSquare}/></span>
		</div>
	);
}

export default ProjectFolder;