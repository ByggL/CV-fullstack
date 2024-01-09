import React, { useEffect, useState } from "react";
import {
	Image,
	Text,
	Heading,
	HStack,
	Center,
	Spacer,
	StackDivider,
	VStack,
	Box,
	AbsoluteCenter,
	Divider,
	Flex,
} from "@chakra-ui/react";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import "./App.css";
import {
	_renderExperience,
	_renderFormations,
	_renderInterests,
	_renderSkills,
	_renderLanguages,
} from "./renderData.js";

function CategoryDivider(props) {
	return (
		<Box position="relative" padding="10">
			<Divider size="2xl" />
			<AbsoluteCenter
				bg="white"
				px="4"
				fontSize="xxx-large"
				fontWeight="bold"
				fontFamily="Liberation Mono">
				{props.name}
			</AbsoluteCenter>
		</Box>
	);
}

function App() {
	const [backendData, setBackendData] = useState([{}]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api")
			.then((response) => response.json())
			.then((data) => {
				setBackendData(data);
				setLoading(false);
				console.log(data.skills);
				console.log(Object.entries(data.skills));
			});
	}, []);

	const slanted1 = {
		transform: "rotate(65deg)",
		backgroundColor: "#F2F2F2",
	};

	const slanted2 = {
		transform: "rotate(125deg)",
		backgroundColor: "#F2F2F2",
	};

	if (isLoading) {
		return (
			<Heading className="App" size="7xl">
				Loading...
			</Heading>
		);
	}
	return (
		<>
			<Header />

			<Box>
				<Center>
					<HStack position="relative" mt="10em" mb="10em">
						<Box
							borderWidth="5px"
							borderRadius="50%"
							borderColor="#CF3333">
							<Image
								boxSize="25em"
								objectFit="cover"
								src="/Sleobon_portrait_carre.jpg"
								alt="Samuel Léobon"
								borderRadius="50%"
							/>
						</Box>

						<Spacer />
						<VStack
							align="left"
							divider={<StackDivider borderColor="gray.200" />}
							ml="20px">
							<Heading
								color="black"
								fontSize="7xl"
								fontFamily="Liberation Mono"
								fontWeight="bold">
								Samuel Léobon
							</Heading>
							<Text fontSize="large">
								Futur étudiant en Mastère{" "}
								<i>
									Expert en développement Logiciel, Mobile &
									IOT
								</i>{" "}
								(20 ans)
								<br />
								à la recherche d’une alternance sur deux ans à
								partir d’octobre 2024.
								<br />
								Adaptable, ordonné, dynamique, impliqué.{" "}
							</Text>
						</VStack>
					</HStack>
				</Center>
			</Box>
			<div>
				<CategoryDivider name="Formation" />
				<Box>{_renderFormations(backendData)}</Box>
				<CategoryDivider name="Expérience" />
				<Box>{_renderExperience(backendData)}</Box>
				<CategoryDivider name="Compétences" />
				<Box>{_renderSkills(backendData)}</Box>
				<CategoryDivider name="Autres" />
				<Flex>
					<Box float="left" width="50%">
						{_renderInterests(backendData)}
					</Box>
					<Box float="left" width="50%">
						{_renderLanguages(backendData)}
					</Box>
				</Flex>
			</div>
			{/*<pre>{JSON.stringify(backendData, null, 2)}</pre>*/}
			<div style={slanted1}></div>
			<div style={slanted2}></div>
			<Footer />
		</>
	);
}

export default App;
