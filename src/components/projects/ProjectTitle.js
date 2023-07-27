import React from "react";

import classes from "./ProjectTitle.module.css"

const ProjectTitle = ({title}) => {
	return (
		<span className={classes.title}>
			{title}
		</span>
	);
}

export default ProjectTitle;