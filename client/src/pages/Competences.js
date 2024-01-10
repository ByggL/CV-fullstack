import React from "react";
import { Box } from "@chakra-ui/react";

import { CategoryDivider } from "../components/CategoryDivider.js";
import { _renderSkills } from "../renderData.js";
import "../App.css";

function Competences(props) {
	return (
		<div>
			<CategoryDivider name="Compétences" />
			<Box>{_renderSkills(props.data)}</Box>
		</div>
	);
}

export default Competences;
