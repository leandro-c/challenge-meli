import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ChakraProvider, Stack, Image, Input, IconButton } from '@chakra-ui/react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault();
    router.push(`/?q=${event.target['query'].value}`)
  }

  return (
    <ChakraProvider>
      <Stack backgroundColor="#ededed" height="100%" minHeight="100vh">
        <Stack backgroundColor="#fff159" direction="row" pl={20} pr={20} pt={4} pb={4} spacing={6}>
          <div style={{ width: 40 }}>
            <Image src="/Logo_ML.png" />
          </div>
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Stack direction="row" width="100%" spacing={0}>
              <Input placeholder="Nunca dejes de buscar" backgroundColor="white" name="query" roundedRight={0} />
              <IconButton
                aria-label="Search database"
                icon={<img src="/search.svg" />}
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