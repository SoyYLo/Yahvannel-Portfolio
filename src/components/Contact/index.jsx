import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");

	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}
    function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<section>
			<div class="align-center">
				<h2 class="page-header">Contact Me</h2>
			</div>
			<div>
			<form class="w-full max-w-lg justify-center">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-md text-center font-bold mb-2" for="grid-password">
        E-mail
      </label>
	  <p class="font-serif text-sm text-center"> yahvannellopez@gmail.com </p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-md text-center font-bold mb-2" for="grid-password">
        GitHub
      </label>
	  <p class="text-center"> https://github.com/SoyYLo </p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-md text-center font-bold mb-2" for="grid-password">
        LinkedIn
      </label>
	  <p class="text-center">https://www.linkedin.com/in/yahvannel-lopez-48895977/</p>
    </div>
  </div>
  <div class="md:flex md:items-center">
   
    <div class="md:w-2/3"></div>
  </div>
</form>
			</div>
		</section>
	);
}

export default Contact;