import React from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";

import classes from "./Education.module.css";
import commonClasses from "../UI/common.module.css";

const Education = () => {
	return (
		<Card className={`${classes.education} ${commonClasses.clearfix}`}>
			<Title className={`${classes["vertical-center"]} ${classes.title}`}>
				EDUCATION
			</Title>
			<Card className={classes.university}>
				<div className={classes["middle"]}>
					<div className={classes.period}>08/2014 - 09/2019</div>
					<a href={"https://en.uit.edu.vn/"} target="_blank">
						<div className={classes["university-name"]}>
							UIT
						</div>
						<div className={classes["university-name-sub"]}>VNU-HCM University of Information Technology</div>
					</a>
					<div className={classes.major}>→Software Engineering</div>
				</div>
			</Card>
		</Card>
	)
}

export default Education;