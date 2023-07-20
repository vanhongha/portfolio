import React from "react";
import Card from "../UI/Card";
import ThreeDot from "../UI/ThreeDot";

import classes from "./AboutCard.module.css";

const AboutCard = (props) => {
	return (
		<Card className={`${classes["about-card"]} ${classes[`${props.className}`]}`}>
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