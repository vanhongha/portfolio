import React from "react";

import classes from "./ThreeDot.module.css";

const ThreeDot = (props) => {
	return (
		<div className={props.className}>
			<ul className={`${classes["three-dot"]}`}>
				<li className={`${classes.dot} ${classes.blue}`}></li>
				<li className={`${classes.dot} ${classes.green}`}></li>
				<li className={`${classes.dot} ${classes.grey}`}></li>
			</ul>
		</div>
	)
}

export default ThreeDot;