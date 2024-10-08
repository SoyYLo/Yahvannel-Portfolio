import React from "react";

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<div class="sm:mb-0 self-center">
			<a href="#" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"><span onClick={() => setCurrentTab("about")}>About Me</span></a>
			<a href="#" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"><span onClick={() => setCurrentTab("portfolio")}>Portfolio</span></a>
			<a href="#" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"><span onClick={() => setCurrentTab("contact")}>Contact</span></a>
			<a href="#" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"><span onClick={() => setCurrentTab("resume")}>Resume</span></a>
		</div>
	)

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("about")}>About Me</span>
				</li>
				<li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
				</li>
				<li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</li>
				<li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("resume")}>Resume</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;