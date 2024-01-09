import { Box, Text, Center, HStack, AbsoluteCenter } from "@chakra-ui/react";
import React from "react";

export function Footer() {
	return (
		<footer>
			<Box bg="#CF3333">
				<HStack></HStack>
				<Center>© 2024 Samuel Léobon, All Rights Reserved</Center>{" "}
				<br />
				<Center>Powered by : React, Chakra UI, Express.js</Center>
			</Box>
		</footer>
	);
}
