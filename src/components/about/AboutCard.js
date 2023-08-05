import React from "react";
import Card from "../UI/Card";
import ThreeDot from "../UI/ThreeDot";

import classes from "./AboutCard.module.css";
import commonClasses from "../UI/common.module.css"

const AboutCard = (props) => {
	const clearFix = props.clearfix??false;
	return (
		<Card className={`${classes["about-card"]} ${props.className} ${clearFix ? commonClasses.clearfix : ""}`} id={props.id}>
			<div className={classes.header}>
				<ThreeDot className={classes["three-dot-left"]} />
				<div className={classes["title-right"]}>
					<h1>{"{" + props.cardTitle + "}"}</h1>
				</div>
			</div>
			<div className={classes.body}>
				{props.data}
			</div>
		</Card>
	);
}

export default AboutCard;