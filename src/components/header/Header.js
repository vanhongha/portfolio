import React, {useState} from "react";
import ThreeDot from "../UI/ThreeDot";

import classes from "./Header.module.css";
import commonClasses from "../UI/common.module.css"

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const onToggleMenu = (e) => {
		setOpenMenu(e.target.checked);
	}

	return (
		<>
			<header>
				<div className={`${classes.desktop} ${commonClasses.shadow}`}>
					<ThreeDot className={classes["header-left"]}/>
					<ul className={classes["header-right"]}>
						<li className={classes.menu}><a href="#about">About</a></li>
						<li className={classes.menu}><a href="#education">Education</a></li>
						<li className={classes.menu}><a href="#skills">Skills</a></li>
						<li className={classes.menu}><a href="#experiences">Experiences</a></li>
						<li className={classes.menu}><a href="#projects">Projects</a></li>
					</ul>
				</div>
				<div className={`${classes["top-nav"]} ${classes.mobile} ${commonClasses.shadow}`}>
					<input id={classes["menu-toggle"]} type="checkbox" onChange={onToggleMenu}/>
					<label className={classes["menu-button-container"]} htmlFor={classes["menu-toggle"]}>
						<div className={classes["menu-button"]}></div>
					</label>
					<ul className={`${classes["menu-dropdown"]} ${openMenu ? classes.checked : classes.notchecked}`}>
						<li>About</li>
						<li>Education</li>
						<li>Skills</li>
						<li>Experiences</li>
						<li>Projects</li>
					</ul>
				</div>
			</header>
		</>
	)
}

export default Header;