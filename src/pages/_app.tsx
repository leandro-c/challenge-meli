import React from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider, Stack, Image, Input, IconButton } from '@chakra-ui/react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    console.log(event.target["query"].value)
  }

  return (
    <ChakraProvider>
      <Stack>
        <Stack backgroundColor="#fff159" direction="row" padding={4} spacing={6}>
          <div style={{ width: 40 }}>
            <Image src="/Logo_ML.png" />
          </div>
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Stack direction="row" width="100%" spacing={0}>
              <Input backgroundColor="white" name="query" roundedRight={0} />
              <IconButton
                aria-label="Search database"
                icon={<img src="https://icongr.am/feather/search.svg?size=20&color=#666" />}
                roundedLeft={0}
              />
            </Stack>
          </form>
        </Stack>
        <Component {...pageProps} />
      </Stack>
    </ChakraProvider>
  )
}


export default App