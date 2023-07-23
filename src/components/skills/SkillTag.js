import React from "react";

import classes from "./SkillTag.module.css";

const SkillTag = (props) => {
	return (
		<div className={classes["skill-tag"]}>
			{props.tag}
		</div>
	);
}

export default SkillTag;