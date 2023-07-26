import React from "react";

import classes from "./JobTitle.module.css";

const JobTitle = (props) => {
	return (
		<div className={classes["job-title"]}>
			{props.children}
		</div>
	)
}

export default JobTitle;