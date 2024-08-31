import React from "react";
import Navigation from "../Navigation";


function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
			<div class="mb-2 sm:mb-0 inner">

				<a href="/home" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Yahvannel's Portfolio</a><br />
				{/* <span class="text-xs text-grey-dark">Beautiful New Tagline</span> */}

			</div>
			<Navigation
				currentTab={currentTab}
				setCurrentTab={setCurrentTab}
			></Navigation>

		</nav>
	)

	// return (
	// 	<header>
	// 		<div>
	// 			<h2>Yahvannel's Portfolio</h2>
	// 		</div>
	// 		<div>
	// 			<Navigation
	// 				currentTab={currentTab}
	// 				setCurrentTab={setCurrentTab}
	// 			></Navigation>
	// 		</div>
	// 	</header>
	// );
}

export default Header;