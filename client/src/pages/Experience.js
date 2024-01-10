import React from "react";
import { Box } from "@chakra-ui/react";

import { CategoryDivider } from "../components/CategoryDivider.js";
import { _renderExperience } from "../renderData.js";
import "../App.css";

function Experience(props) {
	return (
		<div>
			<CategoryDivider name="Expérience" />
			<Box>{_renderExperience(props.data)}</Box>
		</div>
	);
}

export default Experience;
