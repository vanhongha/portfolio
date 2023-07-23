import React from "react";
import ThreeDot from "../UI/ThreeDot";

import classes from "./Header.module.css";
import commonClasses from "../UI/common.module.css"

const Header = () => {
	return(
		<header className={commonClasses.shadow}>
			<ThreeDot className={classes["header-left"]}/>
			<ul className={classes["header-right"]}>
				<li className={classes.menu}><a href="#about">About</a></li>
				<li className={classes.menu}><a href="#education">Education</a></li>
				<li className={classes.menu}><a href="#skills">Skills</a></li>
				<li className={classes.menu}><a href="#experiences">Experiences</a></li>
				<li className={classes.menu}><a href="#projects">Projects</a></li>
			</ul>
		</header>
	)
}

export default Header;