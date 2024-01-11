import React from "react";
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
} from "@chakra-ui/react";
import "../App.css";

function Home() {
	const slanted1 = {
		transform: "rotate(65deg)",
		backgroundColor: "#F2F2F2",
	};

	const slanted2 = {
		transform: "rotate(125deg)",
		backgroundColor: "#F2F2F2",
	};

	return (
		<>
			<div className="content">
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
								divider={
									<StackDivider borderColor="gray.200" />
								}
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
										Expert en développement Logiciel, Mobile
										& IOT
									</i>{" "}
									(20 ans)
									<br />
									à la recherche d’une alternance sur deux ans
									à partir d’octobre 2024.
									<br />
									Adaptable, ordonné, dynamique, impliqué.{" "}
								</Text>
							</VStack>
						</HStack>
					</Center>
				</Box>
			</div>
			{/*<pre>{JSON.stringify(backendData, null, 2)}</pre>*/}
			<div style={slanted1}></div>
			<div style={slanted2}></div>
		</>
	);
}

export default Home;
