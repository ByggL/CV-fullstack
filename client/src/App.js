import React, {useEffect, useState} from 'react'
import { ChakraProvider } from '@chakra-ui/react'


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
    <ChakraProvider>
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
  )
}

export default App