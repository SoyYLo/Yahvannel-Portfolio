import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a
					href="https://github.com/SoyYLo"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/github-logo.png")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/yahvannel-lopez-48895977/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/logos/linkedin-logo.png")}
						alt="LinkedIn"
						className="logo"
					></img>
				</a>
			</div>
            <div>
				<a
					href="https://stackoverflow.com/users/27054196/soyylo?tab=profile"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../../assets/stackoverflow_logo.png")}
						alt="StackOverflow"
						className="logo"
					></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;