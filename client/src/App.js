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
} from "@chakra-ui/react";
import { Header } from "./Header.js";

function CategoryDivider(props) {
  return (
    <Box position="relative" padding="10">
      <Divider size="2xl" />
      <AbsoluteCenter bg="white" px="4" fontSize="xx-large" fontWeight="bold">
        {props.name}
      </AbsoluteCenter>
    </Box>
  );
}

function _renderFormations(data) {
  if (!typeof data === undefined)
    return Object.entries(data.formations).map((formation) => {
      return <Heading textColor="black">{formation.data}</Heading>;
    });
}

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        console.log(data);
        console.log(data.formations);
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

  return (
    <>
      <Header />
      <Box>
        <Center>
          <HStack position="relative" mt="10em" mb="10em">
            <Box borderWidth="5px" borderRadius="50%" borderColor="#CF3333">
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
              ml="20px"
            >
              <Heading color="black" fontSize="7xl">
                Samuel Léobon
              </Heading>
              <Text>
                Futur étudiant en Mastère{" "}
                <i>Expert en développement Logiciel, Mobile & IOT</i> (20 ans)
                <br />
                à la recherche d’une alternance sur deux ans à partir d’octobre
                2024.
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

        <CategoryDivider name="Compétences" />

        <CategoryDivider name="Intérêts" />
      </div>
      <div>
        {typeof backendData.formations === "undefined" ? (
          <p>Loading API...</p>
        ) : (
          backendData.formations.map((formation, i) => {
            <Heading textColor="black">{formation.name}</Heading>;
          })
        )}
      </div>
      <pre>{JSON.stringify(backendData, null, 2)}</pre>
      <div style={slanted1}></div>
      <div style={slanted2}></div>
    </>
  );
}

export default App;
