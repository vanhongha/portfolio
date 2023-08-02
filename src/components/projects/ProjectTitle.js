import React from "react";

import classes from "./ProjectTitle.module.css"

const ProjectTitle = (props) => {
	return (
		<span className={`${classes.title} ${props.className}`}>
			{props.title}
		</span>
	);
}

export default ProjectTitle;