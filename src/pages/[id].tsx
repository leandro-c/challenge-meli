import React from 'react';
import { GetServerSideProps } from 'next';
import api from '../product/api';
import { Product } from '../product/types';
import { Box, Stack, Text, Button, Image, Center } from '@chakra-ui/react';
import Error from 'next/error';


interface Props {
    result: Product;
}

const IndexPage: React.FC<Props> = ({ result, error }) => {

    if(error){
        return <Error statusCode={500}/>
    }

    return (
        <Box padding={4}>
            <Center>
                <Stack width="90%" backgroundColor="white" borderRadius={2} boxShadow="sm" padding={4}>
                    <Stack padding={5} justifyContent="space-between" direction={{ base: "column", sm: "row" }}>
                        <Stack>
                            <Image src={result.image} height={300} width={300} />
                            <Text pt={100} pb={5} fontSize="xl" fontWeight="bold" direction={{ base: "column", sm: "row" }}>Descripcion del producto</Text>
                            <Text color="rgb(154, 154, 154)" direction={{ base: "column", sm: "row" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                In velit lacus, tincidunt a dignissim ac, facilisis sed massa. Vestibulum justo diam, tincidunt at augue nec, ultricies tempor nisl.
                                Morbi pellentesque vel mauris vitae lobortis. Cras et cursus felis. Quisque eget auctor lacus. Maecenas dapibus dui mauris.
                                Etiam volutpat ut metus euismod rutrum. Sed tincidunt felis eget purus ultricies ullamcorper.
                                Nunc vel mi eget leo maximus faucibus. Aliquam nec purus eleifend, finibus justo quis, dapibus nisl.
                                Vestibulum consectetur magna sit amet sagittis posuere.
                                Suspendisse vitae est in nulla tincidunt dictum. Nam faucibus ultrices elit ut iaculis.
                                Suspendisse condimentum risus vel ex pulvinar, eu venenatis diam feugiat.
                                Maecenas mauris nunc, pulvinar vitae lacus eu, laoreet tincidunt velit. Etiam eu feugiat tortor, at dapibus arcu.
                            </Text>
                        </Stack>
                        <Stack maxWidth="320">
                            <Text color="rgb(154, 154, 154)" fontSize="sm">
                                Estado - Vendido
                            </Text>
                            <Text fontSize="xl" fontWeight="bold">
                                {result.title}
                            </Text>
                            <Text fontSize="4xl">
                                {result.price.toLocaleString("es-Ar", { style: "currency", currency: "ARS" })}
                            </Text>
                            <Button colorScheme="blue">Comprar</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Center>
        </Box>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    try {
        const result = await api.fetch((query.id as string));
        return {
            props: {
                result
            }
        };
    } catch (error) {
        
        return {
            props:{
                error: true
            }
        }
    }
    
};

export default IndexPage;