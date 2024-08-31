import React from "react";

function Footer() {

	return (
		<section class="bg-white">
			<div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">

				<div class="flex justify-center mt-8 space-x-6">

					<a
						href="https://github.com/SoyYLo"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="./github-logo.png"
							alt="Github"
							class="w-6 h-6"
						></img>
					</a>
					<a
						href="https://www.linkedin.com/in/yahvannel-lopez-48895977/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="./linkedIn-logo.png"
							alt="LinkedIn"
							class="w-6 h-6"
						></img>
					</a>
					<a
						href="https://stackoverflow.com/users/27054196/soyylo?tab=profile"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="./stackoverflow_logo.png"
							alt="StackOverflow"
							class="w-6 h-6"
						></img>
					</a>
				</div>
				<p class="mt-8 text-base leading-6 text-center text-gray-400">
					{/* © 2021 SomeCompany, Inc. All rights reserved. */}
				</p>
			</div>
		</section>
	)


	// return (
	// 	<footer className="footer">
	// 		<div>
	// 			<a
	// 				href="https://github.com/SoyYLo"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				<img
	// 					src="./github-logo.png"
	// 					alt="Github"
	// 					className="logo"
	// 				></img>
	// 			</a>
	// 		</div>
	// 		<div>
	// 			<a
	// 				href="https://www.linkedin.com/in/yahvannel-lopez-48895977/"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				<img
	// 					src="linkedin-logo.png"
	// 					alt="LinkedIn"
	// 					className="logo"
	// 				></img>
	// 			</a>
	// 		</div>
	// 		<div>
	// 			<a
	// 				href="https://stackoverflow.com/users/27054196/soyylo?tab=profile"
	// 				target="_blank"
	// 				rel="noopener noreferrer"
	// 			>
	// 				<img
	// 					src="stackoverflow_logo.png"
	// 					alt="StackOverflow"
	// 					className="logo"
	// 				></img>
	// 			</a>
	// 		</div>
	// 	</footer>
	// );
}

export default Footer;