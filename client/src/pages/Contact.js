import { VStack } from "@chakra-ui/react";
import React from "react";
import { CategoryDivider } from "../components/CategoryDivider";

function Contact() {
	return (
		<div>
			<CategoryDivider name="Contact" />
			<form
				action="mailto:samuel.leobon@gmail.com"
				method="POST"
				enctype="text/plain"
				name="EmailForm">
				<VStack>
					<label for="name">Nom</label>
					<br />
					<input type="text" id="name" name="name" />
					<br />

					<label for="ContactCommentt">Message</label>
					<br />
					<textarea id="ContactCommentt" rows="6" cols="20" />
					<br />

					<input type="submit" value="Send" id="submit" />
				</VStack>
			</form>
		</div>
	);
}

export default Contact;
