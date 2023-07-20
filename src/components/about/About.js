import React from "react";
import ReactDOM from "react-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIdCardClip, faBriefcase, faLocationDot} from '@fortawesome/free-solid-svg-icons'

import classes from "./About.module.css"

import background from "../../assets/BG.png"
import AboutCard from "./AboutCard";

const AboutBG = () => {
	return (<div className={classes.background} style={{backgroundImage: `url(${background})`}}></div>);
}

const About = () => {
	const root = document.getElementById("root");

	const infoData = (
		<ul style={{textAlign: "left", listStyle: "none"}}>
			<li style={{padding: "7px 0"}}><FontAwesomeIcon icon={faIdCardClip}/><h3 style={{display:"contents"}}> Van, Hong Ha</h3></li>
			<li style={{padding: "7px 0"}}><FontAwesomeIcon icon={faBriefcase}/><h3 style={{display:"contents"}}> Software Engineer</h3></li>
			<li style={{padding: "7px 0"}}><FontAwesomeIcon icon={faLocationDot}/><h3 style={{display:"contents"}}> &nbsp;Chiba, Japan</h3></li>
		</ul>
	);

	return (
		<>
			{ReactDOM.createPortal(<AboutBG/>, root)}
			<AboutCard
				className={"info"}
				cardTitle={"Info"}
				data={infoData}
			/>
		</>
	);
}

export default About;