import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href= "https://drive.google.com/file/d/1-6SzEaDeR2KNNdZXQdY3AvPfO72QmJRA/view?usp=sharing" >
					<h4>View my Resume</h4>
				</a>
			</div>
			<div>
				<h5>Front-End Skills</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>UI/UX</li>
				</ol>
				<br></br>
				<h5>Back-End Skills</h5>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
                <br></br>
				<h5>Dev Tool Skills</h5>
				<ol>
					<li>Git</li>
					<li>npm</li>
					<li>Jest</li>
				</ol>
				<br></br>
				<h5>Database Skills</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;