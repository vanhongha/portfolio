import React, {useEffect} from "react";
import ReactDOM from "react-dom";

import Title from "../UI/Title";
import ExperienceCard from "./ExperienceCard";

import background from "../../assets/BG-exp.png";

import classes from "./Experiences.module.css";

const EXPERIENCES = [
    {
        id: "rk",
        period: "08/2022 - Present",
        company_name: "Rikkeisoft",
        title: "Web Developer/Bridge SE",
        descriptions: [
            "Working on web App development project using Spring Boot",
            "This is monolith systems architecture",
            "This is web application used for manage time attendance",
            "In charge of backend API and frontend development",
            "Contributed to design assessments, code reviews and brainstorming sessions",
            "Worked with developers to identify and remove software bugs",
            "Primarily responsible for frontend development using HTML, CSS, Javascript and backend development\n" +
			"using Java",
        ],
        keywords: [
            "BrSE", "Java", "Spring Boot"
        ]
    },
    {
        id: "ibs",
        period: "03/2020 - 08/2022",
        company_name: "IB System Co., Ltd",
        title: "Web Engineer",
        descriptions: [
            "Worked on web App development project using Codeigniter",
            "This is monolith systems architecture",
            "This is web application used for manage kindergarten",
            "Teachers in the kindergarten have the ability to handle all relevant matters and there is a separate system to communicate with the parents of the children",
            "In charge of backend API and frontend development",
            "Skilled at working independently and collaboratively in team environment",
            "Discussed issues with team members to provide resolution and apply best practices",
            "Primarily responsible for frontend development using HTML, CSS, Javascript and backend development using PHP",
        ],
        keywords: [
            "Codeigniter", "PHP", "MySQL", "Javascript"
        ]
    },
    {
        id: "imba",
        period: "02/2018 - 02/2019",
        company_name: "Imba Games",
        title: "Game Developer",
        descriptions: [
            "Worked on a project to develop a 3D mobile game",
            "Created the UI for the game as the frontend",
            "Built a backend service to manage the game's items using microservice architecture",
            "Worked with Google cloud service to develop notice system and game's events",
            "Improved the game's performance",
            "Discussed issues with team members to provide resolution and apply best practices",
            "Primarily responsible for frontend development using Unity, C# and backend development using JavaScript, Node.js",
        ],
        keywords: [
            "Unity", "C#", "Javascript", "Node.js", "MongoDB"
        ]
    },
]

const ExperiencesBG = () => {
    return (<div id={"experiences-bg"} className={classes.background}
                 style={{backgroundImage: `url(${background})`}}></div>);
}

const Experiences = () => {
    const root = document.getElementById("root");

    useEffect(() => {
        const exp_element = document.getElementById("experiences");
        const anchor_element = document.getElementById(EXPERIENCES[0].id);
        const exp_bg = document.getElementById("experiences-bg");
        exp_bg.style.top = (exp_element.offsetTop + anchor_element.offsetTop + anchor_element.offsetHeight / 2) + "px";
        exp_bg.style.height = (EXPERIENCES.length - 1) * (anchor_element.offsetHeight + 50) + "px";
    })

    return (
        <div id={"experiences"} className={classes.experiences}>
            <Title>WORK HISTORY</Title>
            <div>
                {ReactDOM.createPortal(<ExperiencesBG/>, root)}
                {EXPERIENCES.map(experience => {
                    return <ExperienceCard id={experience.id} key={experience.id} experience={experience}/>
                })}
            </div>
        </div>
    );
}

export default Experiences;