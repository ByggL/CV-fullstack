import React from "react";
import {
	Heading,
	UnorderedList,
	ListItem,
	Image,
	Flex,
	Box,
	Spacer,
} from "@chakra-ui/react";

export function _renderFormations(data) {
	// if (!typeof data !== undefined)
	let formationsformatees = data.formations.map(function (formation) {
		return (
			<ListItem ml="2em">
				<Flex>
					<Image src={formation.logo} width="3em" mr="1em" />
					<Heading textColor="black">
						<span style={{ textDecoration: "underline #CF3333" }}>
							{formation.name}
						</span>{" "}
						| {formation.dates}
					</Heading>
				</Flex>

				<br />
				<p>{formation.description}</p>
				<br />
			</ListItem>
		);
	});

	return (
		<UnorderedList styleType="none">{formationsformatees}</UnorderedList>
	);
}

export function _renderExperience(data) {
	// if (!typeof data !== undefined)
	let experiencesformatees = data.experience.map(function (exp) {
		return (
			<ListItem ml="2em">
				<Flex>
					<Image src={exp.logo} width="3em" mr="1em" />
					<Heading textColor="black">
						<span style={{ textDecoration: "underline #CF3333" }}>
							{exp.company}
						</span>{" "}
						| {exp.dates}
					</Heading>
				</Flex>

				<p style={{ fontWeight: "bold" }}>{exp.jobTitle}</p>
				<p style={{ whiteSpace: "pre-line" }}>{exp.description}</p>
				<br />
			</ListItem>
		);
	});

	return (
		<UnorderedList styleType="none">{experiencesformatees}</UnorderedList>
	);
}

export function _renderSkills(data) {
	let competencesformatees = Object.entries(data.skills).map(function (skillentry) {
		let skillsresult = skillentry[1].map(function (subskill) {
			return <ListItem>{subskill}</ListItem>;
		});

		return (
			<>
				<Box>
					<Heading
						textColor="black"
						textDecoration="underline #CF3333">
						{skillentry[0]}
					</Heading>
					<br />
					<UnorderedList ml="2em">{skillsresult}</UnorderedList>
					<br />
				</Box>
				<Spacer />
			</>
		);
	});

	return (
		<Flex alignContent="space-between" ml="3em">
			{competencesformatees}
		</Flex>
	);
}

export function _renderInterests(data) {
	let interetsformatees = data.interests.map(function (interest) {
		return (
			<ListItem>
				{interest.name}
				<span style={{ fontStyle: "italic" }}> {interest.context}</span>
			</ListItem>
		);
	});

	return (
		<div style={{ marginLeft: 3 + "em" }}>
			<Heading textColor="black" textDecoration="underline #CF3333">
				Intérêts
			</Heading>
			<br />
			<UnorderedList>{interetsformatees}</UnorderedList>
			<br />
		</div>
	);
}

export function _renderLanguages(data) {
	let langagesformates = data.languages.map(function (language) {
		return <ListItem>{language}</ListItem>;
	});

	return (
		<div style={{ marginLeft: 3 + "em" }}>
			<Heading textColor="black" textDecoration="underline #CF3333">
				Langues
			</Heading>
			<br />
			<UnorderedList>{langagesformates}</UnorderedList>
			<br />
		</div>
	);
}
