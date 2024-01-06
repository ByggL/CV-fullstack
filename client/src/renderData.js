import React from "react";
import { Heading, UnorderedList, ListItem } from "@chakra-ui/react";

export function _renderFormations(data) {
	// if (!typeof data !== undefined)
	let formationsformatees = data.formations.map(function (formation) {
		return (
			<ListItem ml="2em">
				<Heading textColor="black">
					{formation.name} | {formation.dates}
				</Heading>
				<br />
				<p>{formation.description}</p>
				<br />
			</ListItem>
		);
	});

	return (
		<UnorderedList>
			{formationsformatees}
		</UnorderedList>
	);
}

export function _renderExperience(data) {
	// if (!typeof data !== undefined)
	let experiencesformatees = data.experience.map(function (exp) {
		return (
			<ListItem ml="2em">
				<Heading textColor="black">
					{exp.company} | {exp.dates}
				</Heading>
				<p style={{fontWeight: "bold"}}>{exp.jobTitle}</p>
				<p style={{ whiteSpace: "pre-line" }}>{exp.description}</p>
				<br />
			</ListItem>
		);
	});

	return (
		<UnorderedList>
			{experiencesformatees}
		</UnorderedList>
	);
}

export function _renderSkills(data) {
	let competencesformatees = Object.entries(data.skills).map( function (skillentry) {
		let skillsresult = skillentry[1].map(function (subskill) {
			return <ListItem>{subskill}</ListItem>;
		});

		return (
			<ListItem ml="2em">
				<Heading textColor="black">
					{skillentry[0]}
				</Heading>
				<UnorderedList ml="2em">{skillsresult}</UnorderedList>
				<br />
			</ListItem>
		);
	});

	return (
		<UnorderedList>
			{competencesformatees}
		</UnorderedList>
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
		<div style={{ marginLeft: 2 + "em" }}>
			<Heading textColor="black">Intérêts</Heading>
			<UnorderedList>{interetsformatees}</UnorderedList>
			<br />
		</div>
	);
}

export function _renderLanguages(data) {
	let langagesformates = data.languages.map(function(language) {
		return (
			<ListItem>
				{language}
			</ListItem>
		);
	});

	return (
		<div style={{ marginLeft: 2 + "em" }}>
			<Heading textColor="black">Langues</Heading>
			<UnorderedList>{langagesformates}</UnorderedList>
			<br />
		</div>
	)
}