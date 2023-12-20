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
} from "@chakra-ui/react";
import { Header } from "./Header.js";

function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
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
      <Center>
        <HStack position="absolute" top="200%">
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
      <div>
        {typeof backendData.users === "undefined" ? (
          <p>Loading API...</p>
        ) : (
          backendData.users.map((user, i) => {
            <p key={i}>{user}</p>;
          })
        )}
      </div>
      <div style={slanted1}></div>
      <div style={slanted2}></div>
    </>
  );
}

export default App;
