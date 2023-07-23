import React from "react";

import classes from "./Card.module.css";
import commonClasses from "../UI/common.module.css"

const Card = (props) => {
	return (
		<div className={`${classes.card} ${commonClasses.shadow} ${props.className}`} style={props.style}>
			{props.children}
		</div>
	)
}

export default Card;