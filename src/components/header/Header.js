import React, {useState} from "react";
import ThreeDot from "../UI/ThreeDot";

import classes from "./Header.module.css";
import commonClasses from "../UI/common.module.css"

const scrollInto = (id) => {
	document.getElementById(id)?.scrollIntoView({
		behavior: 'smooth'
	});
}

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const onToggleMenu = (e) => {
		setOpenMenu((state) => !state)
	}

	return (
		<>
			<header>
				<div className={`${classes.desktop} ${commonClasses.shadow}`}>
					<ThreeDot className={classes["header-left"]}/>
					<ul className={classes["header-right"]}>
						<li className={classes.menu}>
							<a onClick={() => {
								scrollInto("about");
							}}>About</a>
						</li>
						<li className={classes.menu}>
							<a onClick={() => {
								scrollInto("education");
							}}>Education</a>
						</li>
						<li className={classes.menu}>
							<a onClick={() => {
								scrollInto("skills");
							}}>Skills</a>
						</li>
						<li className={classes.menu}>
							<a onClick={() => {
								scrollInto("experiences");
							}}>Experiences</a>
						</li>
						<li className={classes.menu}>
							<a onClick={() => {
								scrollInto("projects");
							}}>Projects</a>
						</li>
					</ul>
				</div>
				<div className={`${classes["top-nav"]} ${classes.mobile} ${commonClasses.shadow}`}>
					<input id={classes["menu-toggle"]} type="checkbox" onChange={onToggleMenu} checked={openMenu}/>
					<label className={classes["menu-button-container"]} htmlFor={classes["menu-toggle"]}>
						<div className={classes["menu-button"]}></div>
					</label>
					<ul className={`${classes["menu-dropdown"]} ${openMenu ? classes.checked : classes.notchecked}`}>
						<li>
							<a onClick={(e) => {
								scrollInto("about");
								onToggleMenu(e);
							}}>About</a>
						</li>
						<li>
							<a onClick={(e) => {
								scrollInto("education");
								onToggleMenu(e);
							}}>Education</a>
						</li>
						<li>
							<a onClick={(e) => {
								scrollInto("skills");
								onToggleMenu(e);
							}}>Skills</a>
						</li>
						<li>
							<a onClick={(e) => {
								scrollInto("experiences");
								onToggleMenu(e);
							}}>Experiences</a>
						</li>
						<li>
							<a onClick={(e) => {
								scrollInto("projects");
								onToggleMenu(e);
							}}>Projects</a>
						</li>
					</ul>
				</div>
			</header>
		</>
	)
}

export default Header;