import React from "react";
import { Box } from "@chakra-ui/react";

import { CategoryDivider } from "../components/CategoryDivider.js";
import { _renderFormations } from "../renderData.js";
import "../App.css";

function Formation(props) {
	return (
		<div>
			<CategoryDivider name="Formation" />
			<Box>{_renderFormations(props.data)}</Box>
		</div>
	);
}

export default Formation;
