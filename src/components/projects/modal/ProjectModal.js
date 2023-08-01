import React from "react";
import ReactDOM from "react-dom";

import classes from "./ProjectModal.module.css";

const Backdrop = () => {
	return <div className={classes.backdrop}></div>;
}

const ModalOverlay = () => {
	return (<div className={classes.modal}>abc</div>);
}

const portalElement = document.getElementById("overlays");

const ProjectModal = () => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop/>, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay/>, portalElement)}
		</>
	);
}

export default ProjectModal;