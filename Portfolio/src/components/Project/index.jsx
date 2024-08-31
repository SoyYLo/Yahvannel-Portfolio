import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Project(props) {
	// imports the information for the current project sent down.
	const currentProject = useState(props)[0].projects;

	const name = currentProject.name;
	const description = currentProject.description;
	const image = currentProject.image;
	const techs = currentProject.technologies;
	const appLink = currentProject.link;
	const gitLink = currentProject.github;

	// This function parses the information from the array and creates a list.
	function getTechs(techArray) {
		let techList = "";

		for (var i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}

		return techList;
	}

	return (
		<div>
			<div class="rounded-lg overflow-hidden">
				<div class="relative overflow-hidden pb-60">
					<img
						class="absolute h-full w-full object-cover object-center"
						src={`${image}`}
						alt=""
					/>
				</div>
				<div class="relative bg-blue-200">
					<div class="py-10 px-8">
						<h3 class="text-2xl font-bold">{name}</h3>
						<div class="text-gray-600 text-sm font-medium flex mb-4 mt-2">
							<p>Provided by&nbsp;</p>
							<a
								href="https://www.ls.graphics/"
								class="hover:text-black transition duration-300 ease-in-out"
							>LS Graphics</a
							>
						</div>
						<p class="leading-7">
							High quality notepad mockup in a huge resolution and with
							changeable everything.
						</p>
						<div class="mt-10 flex justify-between items-center">
							<div>
								<img
									src="https://collect.criggzdesign.com/wp-content/uploads/2020/07/Ps.svg"
									alt=""
									class="w-6"
								/>
							</div>
							<a
								href="https://collect.criggzdesign.com/index.php/resources/mockups/notepad/"
								class="flex items-center"
							>
								<p class="mr-4">Read more</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14.125"
									height="13.358"
									viewBox="0 0 14.125 13.358"
								>
									<g transform="translate(-3 -3.293)">
										<path
											id="Path_7"
											data-name="Path 7"
											d="M14.189,10.739H3V9.2H14.189L9.361,4.378l1.085-1.085,6.679,6.679-6.679,6.679L9.361,15.566Z"
											fill="#1d1d1d"
											fill-rule="evenodd"
										></path>
									</g>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)


	// return (
	// 	<Card style={{ width: "18rem" }}>
	// 		<Card.Img
	// 			variant="top"
	// 			src={`${image}`}
	// 			className="card-image"
	// 		/>
	// 		<div className="center">
	// 			<Card.Body>
	// 				<Card.Title className="card-title">{name}</Card.Title>
	// 				<Card.Text className="card-text">{description}</Card.Text>
	// 				<Card.Subtitle className="card-subtitle">Technologies Used</Card.Subtitle>
	// 				<Card.Text className="card-techs">{getTechs(techs)}</Card.Text>
	// 				<Card.Link href={appLink} target="_blank" className="card-link">
	// 					{name} App
	// 				</Card.Link>
	// 				<br></br>
	// 				<Card.Link href={gitLink} target="_blank" className="card-link">
	// 					{name} Github
	// 				</Card.Link>
	// 			</Card.Body>
	// 		</div>
	// 	</Card>
	// );
}

export default Project;
