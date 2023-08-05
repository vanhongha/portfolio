import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIdCardClip, faBriefcase, faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faSquareGithub} from '@fortawesome/free-brands-svg-icons'

import classes from "./About.module.css"

import background from "../../assets/BG.png"
import AboutCard from "./AboutCard";

const AboutBG = () => {
	return (<div className={classes.background} id={"about-background"} style={{backgroundImage: `url(${background})`}}></div>);
}

const About = () => {
	const root = document.getElementById("root");

	const infoData = (
		<div style={{textAlign: "left", padding: "0 30px"}}>
			<div style={{padding: "7px 0"}}><FontAwesomeIcon size={"lg"} icon={faIdCardClip}/>
				<h2 style={{display: "contents"}}> Van, Hong Ha</h2>
			</div>
			<div style={{padding: "7px 0"}}><FontAwesomeIcon size={"lg"} icon={faBriefcase}/>
				<h2 style={{display: "contents"}}> Software Engineer</h2>
			</div>
			<div style={{padding: "7px 0"}}><FontAwesomeIcon size={"lg"} icon={faLocationDot}/>
				<h2 style={{display: "contents"}}> &nbsp;Chiba, Japan</h2>
			</div>
		</div>
	);

	const contactData = (
		<>
			<div style={{display: "inline-block", padding: "15px"}}><FontAwesomeIcon size={"4x"} icon={faEnvelope}/>
			</div>
			<div style={{display: "inline-block", padding: "15px"}}><FontAwesomeIcon size={"4x"} icon={faSquareGithub}/>
			</div>
			<div style={{display: "inline-block", padding: "15px"}}><FontAwesomeIcon size={"4x"} icon={faLinkedin}/>
			</div>
			<div style={{textAlign: "right", paddingRight: 42}}>
				<a href={""}>My resume is here >></a>
			</div>
		</>
	);

	const aboutMeData = (
		<div className={classes["about-text"]}>
			<p>
				I am a backend software engineer with a
				passion for continual self-development
				and a desire to learn. I excel with backend
				technologies such as Express.js, Django,
				and GraphQL, and I have experience with
				agile development methodologies and a
				solid understanding of software
				development lifecycles. I am also
				multilingual in English, Japanese and
				Korean.
			</p></div>
	);

	useEffect(() => {
		const aboutMe = document.getElementById("about-me");
		const bg = document.getElementById("about-background");
		bg.style.height = (aboutMe.offsetTop + 110 + aboutMe.offsetHeight / 2) + "px";
	});

	return (
		<div className={classes.container}>
			{ReactDOM.createPortal(<AboutBG/>, root)}
			<AboutCard
				id={"info"}
				className={classes.info}
				cardTitle={"Info"}
				data={infoData}
			/>
			<AboutCard
				id={"contact"}
				className={classes.contact}
				cardTitle={"Contact"}
				data={contactData}
			/>
			<AboutCard
				id={"about-me"}
				className={classes["about-me"]}
				cardTitle={"About me"}
				clearfix={true}
				data={aboutMeData}
			/>
		</div>
	);
}

export default About;