import React from "react";
import Card from "../UI/Card";
import CompanyName from "./CompanyName";
import JobTitle from "./JobTitle";

import classes from "./ExperienceCard.module.css"
import ThreeDot from "../UI/ThreeDot";

const ExperienceCard = (props) => {
	const rows = [];
	for (var i = 0; i < Math.ceil(props.experience.descriptions.length / 2); i++) {
		let row = [];
		for (var j = 0; j < 2; j++) {
			const col_element = <span>{props.experience.descriptions[i * 2 + j]}</span>
			row.push(col_element);
		}
		rows.push(row);
	}

	return (
		<Card id={props.id} className={classes["experience-card"]}>
			<ThreeDot className={classes["three-dot"]}/>
			<Card className={classes["experience-card-main"]}>
				<span>{props.experience.period}</span>
				<CompanyName>{props.experience.company_name}</CompanyName>
				<JobTitle>{props.experience.title}</JobTitle>
				<table>
					<tbody>
					{rows.map((row, row_i) => {
						return <tr key={row_i}>
							{row.map((col, col_i) => {
									return <td key={col_i}>{col}</td>
								}
							)}
						</tr>
					})}
					</tbody>
				</table>
			</Card>
		</Card>
	)
}

export default ExperienceCard;