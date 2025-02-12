import React from "react";

function Resume() {
	return (
		// <section>
		// 	<div className="center">
		// 		<h1 className="page-header">My Resume</h1>
		// 	</div>
		// 	<div className="bottom-spacing">
		// 		<a href= "https://drive.google.com/file/d/1-6SzEaDeR2KNNdZXQdY3AvPfO72QmJRA/view?usp=sharing" >
		// 			<h4>View my Resume</h4>
		// 		</a>
		// 	</div>
		// 	<div>
		// 		<h5>Front-End Skills</h5>
		// 		<ol>
		// 			<li>HTML</li>
		// 			<li>CSS</li>
		// 			<li>JavaScript</li>
		// 			<li>jQuery</li>
		// 			<li>Bootstrap</li>
		// 			<li>React</li>
		// 			<li>UI/UX</li>
		// 		</ol>
		// 		<br></br>
		// 		<h5>Back-End Skills</h5>
		// 		<ol>
		// 			<li>APIs</li>
		// 			<li>NodeJS</li>
		// 			<li>Express</li>
		// 			<li>Model View Controller (MVC)</li>
		// 			<li>Progressive Web Applications (PWA)</li>
		// 		</ol>
		//         <br></br>
		// 		<h5>Dev Tool Skills</h5>
		// 		<ol>
		// 			<li>Git</li>
		// 			<li>npm</li>
		// 			<li>Jest</li>
		// 		</ol>
		// 		<br></br>
		// 		<h5>Database Skills</h5>
		// 		<ol>
		// 			<li>MySQL</li>
		// 			<li>Sequelize</li>
		// 			<li>NoSQL</li>
		// 			<li>GraphQL</li>
		// 			<li>MongoDB</li>
		// 			<li>Mongoose</li>
		// 		</ol>
		// 	</div>
		// </section>
		<body class="bg-gray-100 text-gray-800">
			<div class="container mx-auto py-10 px-5">
				<div class="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
					<div class="p-4 sm:p-6">
						<div class="flex items-center justify-between">
							<div>
								<p class="text-sm text-gray-600">Location: Austin, TX</p>
							</div>
						</div>
						<hr class="my-4"></hr>

						<div>
							<a href="https://drive.google.com/file/d/1Y4g5r3BtjrwaUlJ66ei309tX-ROX0rLx/view?usp=sharing" >
								<h4 class="text-lg underline">View my Resume </h4>
							</a>
							<h3 class="text-lg font-semibold mb-2">Front-End Skills</h3>
							<ul class="list-disc list-inside text-sm">
								<li>HTML</li>
								<li>CSS</li>
								<li>JavaScript</li>
								<li>jQuery</li>
								<li>Bootstrap</li>
								<li>React</li>
								<li>UI/UX</li>
								<li>Figma</li>
							</ul>
						</div>
						<div class="mt-4">
							<h3 class="text-lg font-semibold mb-2">Back-End Skills</h3>
							<div>

								<ul class="list-disc list-inside text-sm">
									<li>APIs</li>
									<li>NodeJS</li>
									<li>Express</li>
									<li>Model View Controller (MVC)</li>
									<li>Progressive Web Applications (PWA)</li>
								</ul>
							</div>
							<div class="mt-4">
								<h4 class="text-md font-semibold">Dev Tools Skills</h4>
								<ul class="list-disc list-inside text-sm">
									<li>Git</li>
									<li>npm</li>
									<li>Jest</li>
								</ul>
							</div>
						</div>
						<div class="mt-4">
							<h3 class="text-lg font-semibold mb-2">Database Skills</h3>
							<ul class="list-disc list-inside text-sm">
								<li>MySQL</li>
								<li>Sequelize</li>
								<li>NoSQL</li>
								<li>GraphQL</li>
								<li>MongoDB</li>
								<li>Mongoose</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</body>
	);
}

export default Resume;