import React from "react";
import { Heading, UnorderedList, ListItem } from "@chakra-ui/react";

export function _renderFormations(data) {
	// if (!typeof data !== undefined)
	let formationsformatees = data.formations.map(function (formation) {
		return (
			<div style={{ marginLeft: 2 + "em" }}>
				<Heading textColor="black" ml="2em">
					{formation.name} | {formation.dates}
				</Heading>
				<br />
				<div style={{ marginLeft: 8 + "em" }}>
					<p>{formation.description}</p>
				</div>
				<br />
			</div>
		);
	});

	return formationsformatees;
}

export function _renderExperience(data) {
	// if (!typeof data !== undefined)
	let experiencesformatees = data.experience.map(function (exp) {
		return (
			<div style={{ marginLeft: 2 + "em" }}>
				<Heading textColor="black" ml="2em">
					{exp.company} | {exp.dates}
				</Heading>
				<p>{exp.jobTitle}</p>
				<p style={{ whiteSpace: "pre-line" }}>{exp.description}</p>
				<br />
			</div>
		);
	});

	return experiencesformatees;
}

export function _renderSkills(data) {
	// if (!typeof data !== undefined)
	let competencesformatees;
	for (const [key, skillgroup] of Object.entries(data.skills)) {
		console.log(key);
		let skillsresult = skillgroup.map(function (subskill) {
			return <ListItem>{subskill}</ListItem>;
		});

		competencesformatees += (
			<div style={{ marginLeft: 2 + "em" }}>
				<Heading textColor="black" ml="2em">
					{key}
				</Heading>
				{/*<UnorderedList>{skillsresult}</UnorderedList>*/}
				<br />
			</div>
		);
	}

	return competencesformatees;
}

export function _renderInterests(data) {
	// if (!typeof data !== undefined)
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
			<UnorderedList>{interetsformatees}</UnorderedList>
			<br />
		</div>
	);
}
