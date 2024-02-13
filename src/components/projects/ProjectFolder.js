import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

import ProjectTitle from "./ProjectTitle";

import classes from "./ProjectFolder.module.css";

const ProjectFolder = (props) => {
	return (
		<div className={`${classes["project-folder"]} project-folder`} id={"fold-" + props.index}
			 style={{'--url1': `url(${props.folder})`, '--url2': `url(${props.folder_hover})`}}>
			<ProjectTitle title={props.project.name}/>
			<span className={`${classes["see-more"]} see-more`}>
				See more <FontAwesomeIcon size={"sm"} icon={faArrowUpRightFromSquare}/>
			</span>
		</div>
	);
}

export default ProjectFolder;