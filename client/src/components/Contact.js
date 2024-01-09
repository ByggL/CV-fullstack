import { VStack } from "@chakra-ui/react";
import React from "react";

export function Contact() {
	return (
		<form
			action="mailto:samuel.leobon@gmail.com"
			method="POST"
			enctype="text/plain"
			name="EmailForm">
			<VStack>
				<label for="name">Name:</label>
				<br />
				<input type="text" id="name" name="name" />
				<br />

				<label for="ContactCommentt">Message:</label>
				<br />
				<textarea id="ContactCommentt" rows="6" cols="20" />
				<br />

				<input type="submit" value="Send" id="submit" />
			</VStack>
		</form>
	);
}
