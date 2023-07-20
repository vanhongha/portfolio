import React from "react";

import classes from "./Card.module.css";
import commonClasses from "../../utils/common.module.css"

const Card = (props) => {
	return (
		<div className={`${classes.card} ${commonClasses.shadow} ${props.className}`}>
			{props.children}
		</div>
	)
}

export default Card;