import React from "react";

import classes from "./Title.module.css";

const Title = (props) => {
	return (
		<span className={classes.title}>
			{props.children}
		</span>
	)
}

export default Title;