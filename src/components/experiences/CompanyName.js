import React from "react";

import classes from "./CompanyName.module.css";

const CompanyName = (props) => {
	return (
		<div className={classes["company-name"]}>
			{props.children}
		</div>
	)
}

export default CompanyName;