import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import ThreeDot from "../UI/ThreeDot";

import classes from "./Header.module.css";
import commonClasses from "../UI/common.module.css"

const scrollInto = (id, closeModal) => {
	closeModal();
	document.getElementById(id)?.scrollIntoView({
		behavior: 'smooth'
	});
}

const Header = () => {
	const dispatch = useDispatch();
	const openHeader = useSelector(state => state.openHeader);

	const onToggleMenu = (e) => {
		dispatch({type: "TOGGLE_HEADER"});
	}

	const closeModal = () => {
		dispatch({type: "CLOSE_MODAL"});
	}

	useEffect(() => {
		const header = document.getElementById('header');
		window.addEventListener('scroll', () => {
			if (document.documentElement.scrollTop > 70) {
				header.style.width = 100 + "%";
				header.style.maxWidth = 100 + "%";
				header.style.height = 79 + "px";
				header.style.marginTop = 0;
				header.style.borderRadius = 0;
			}else{
				header.style.width = 80 + "%";
				header.style.maxWidth = 1250 + "px";
				header.style.height = 57 + "px";
				header.style.marginTop = 22 + "px";
				header.style.borderRadius = 50 + "px";
			}
		});
	})

	return (
		<>
			<header>
				<div id={"header"} className={`${classes.desktop} ${commonClasses.shadow}`}>
					<div className={classes.content}>
						<ThreeDot className={classes["header-left"]}/>
						<ul className={classes["header-right"]}>
							<li className={classes.menu}>
								<a onClick={() => {
									scrollInto("about", closeModal);
								}}>About</a>
							</li>
							<li className={classes.menu}>
								<a onClick={() => {
									scrollInto("education", closeModal);
								}}>Education</a>
							</li>
							<li className={classes.menu}>
								<a onClick={() => {
									scrollInto("skills", closeModal);
								}}>Skills</a>
							</li>
							<li className={classes.menu}>
								<a onClick={() => {
									scrollInto("experiences", closeModal);
								}}>Experiences</a>
							</li>
							<li className={classes.menu}>
								<a onClick={() => {
									scrollInto("projects", closeModal);
								}}>Projects</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={`${classes["top-nav"]} ${classes.mobile} ${commonClasses.shadow}`}>
					<input id={classes["menu-toggle"]} type="checkbox" onChange={onToggleMenu} checked={openHeader}/>
					<label className={classes["menu-button-container"]} htmlFor={classes["menu-toggle"]}>
						<div className={classes["menu-button"]}></div>
					</label>
					<ul className={`${classes["menu-dropdown"]} ${openHeader ? classes.checked : classes.notchecked}`}>
						<li>
							<a onClick={(e) => {
								scrollInto("about", closeModal);
								onToggleMenu(e);
							}}>About</a>
						</li>
						<li>
							<a onClick={(e) => {
								scrollInto("education", closeModal);
								onToggleMenu(e);
							}}>Education</a>
						</li>
						<li>
							<a onClick={(e) => {
								scrollInto("skills", closeModal);
								onToggleMenu(e);
							}}>Skills</a>
						</li>
						<li>
							<a onClick={(e) => {
								scrollInto("experiences", closeModal);
								onToggleMenu(e);
							}}>Experiences</a>
						</li>
						<li>
							<a onClick={(e) => {
								scrollInto("projects", closeModal);
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