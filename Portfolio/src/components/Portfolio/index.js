import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Le Appetite',
			description:
				'This is a recipe search engine for all consumers to search meal recipes by keywords or diet groups.',
			image: 'le-appetite.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
                'API',
				
			],
			github: 'https://github.com/SoyYLo/Le-Appetite',
			deployed: 'https://soyylo.github.io/Le-Appetite/',
		},
		{
			name: 'Nerds Culinary Crafting',
			description:
				'A website for nerds to upload their take on pop culture and videogame recipes. Where they can enter into a contest and win best recipe of the week.',
			image: 'ncc.png',
			technologies: [
				'CSS',
				'JavaScript',
				'Express & Sequelize',
                'NPM',
                'Handlebars',
				'Deployed through Render',
			],
			github: 'https://github.com/bcbrauneis/nerdsculinarycrafting',
			deployed: 'https://nerdsculinarycrafting-1.onrender.com',
		},
		{
			name: 'My Blog',
			description:
				'A webpage for an online blog for users to display their work, projects and thoughts for viewers to read.',
			image: 'myblog.png',
			technologies: [
				'JavaScript',
				'HTML',
				'CSS',
			],
			github: 'https://github.com/SoyYLo/The-Best-Blog',
			deployed: 'https://soyylo.github.io/The-Best-Blog/index.html',
		},
		{
			name: 'Readme Template',
			description:
				'This is  a README Generator where other developers and I can have a template to quickly create a README file for a new project.',
			technologies: [
                'Inquirer',
                'NPM',
                'JSON',
                'JavaScript',
                'Node',
            ],
			github: 'https://github.com/SoyYLo/ReadmeTemplate',
			demo: 'https://drive.google.com/drive/folders/1jR1KjJwbtQUZQN9rGWYdE1_NNL05QpBY?usp=sharing',
		},
		{
			name: 'Employee Tracker',
			description:
				'An application where employers can view and manage the departments, roles and employees in their company So that the may organize and keep track of their business',
			technologies: [
                'JavaScript', 
                'Inquirer',
                'SQL',
                'Node',
            ],
			github: 'https://github.com/SoyYLo/Employee-Tracker',
			demo: 'https://drive.google.com/file/d/1RemwdLlAq6U4PrTue52pn2eB6FFo9Y0x/view?usp=sharing',
		},
	];
    return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;