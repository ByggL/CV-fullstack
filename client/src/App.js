import React, {useEffect, useState} from 'react'
import { Image, ChakraProvider, extendTheme, Heading, HStack, Center, Spacer, ColorModeScript } from '@chakra-ui/react'
import {Header} from './Header.js'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })


function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect( () => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <ChakraProvider theme={theme}>
      <Center>
      <HStack>
          <Image
          boxSize='25em'
          objectFit='cover'
          src='/Sleobon_portrait_carre.jpg'
          alt='Samuel Léobon'
          borderRadius="50%"
          />
          <Spacer/>
          <Heading color="black" fontSize="7xl">Samuel Léobon</Heading>
      </HStack>
      </Center>   
      <div>
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading API...</p>
        ) : (
          backendData.users.map((user, i) => {
            <p key={i}>{user}</p>
          })
        )}
      </div>
    </ChakraProvider>
    </>
  )
}

export default App