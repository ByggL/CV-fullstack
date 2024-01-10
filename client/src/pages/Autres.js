import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { CategoryDivider } from "../components/CategoryDivider.js";
import { _renderInterests, _renderLanguages } from "../renderData.js";
import "../App.css";

function Autres(props) {
	return (
		<div>
			<CategoryDivider name="Autres" />
			<Flex>
				<Box float="left" width="50%">
					{_renderInterests(props.data)}
				</Box>
				<Box float="left" width="50%">
					{_renderLanguages(props.data)}
				</Box>
			</Flex>
		</div>
	);
}

export default Autres;
