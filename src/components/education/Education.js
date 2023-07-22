import React from "react";
import Card from "../UI/Card";
import Title from "../UI/Title";

import "./Education.Module.css";

const Education = () => {
	return (
		<Card className="education" style={{borderRadius: "100px"}}>
			<Title>
				EDUCATION
			</Title>
			<Card className="university">
				<div className="vertical-center">
					<div className="period">08/2014 - 09/2019</div>
					<a style={{color: "white", textDecoration: "none"}} href={"https://en.uit.edu.vn/"} target="_blank">
						<div className="university-name">
							UIT
						</div>
						<div className="university-name-sub">VNU-HCM University of Information Technology</div>
					</a>
					<div className="major">→Software Engineering</div>
				</div>
			</Card>
		</Card>
	)
}

export default Education;