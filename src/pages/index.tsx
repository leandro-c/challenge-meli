import React from 'react';
import { GetServerSideProps } from 'next';
import api from '../product/api';
import { Product } from '../product/types';
import { Box, Stack, Text, Center } from '@chakra-ui/react';
import Link from 'next/link';
import Error from 'next/error';

interface Props {
    results: Product[];
}

const IndexPage: React.FC<Props> = ({ results, error }) => {

    if(error){
        return <Error statusCode={500}/>
    }

    return (
        <Box padding={4}>
            <Center>
                <Stack width="90%" backgroundColor="white" borderRadius={2} boxShadow="sm" padding={4}>
                    {
                        results.map(product =>
                            <Link key={product.id} href={`/${product.id}`} >
                                <a>
                                    <Stack key={product.id} direction="row" justifyContent="space-between">
                                        <Stack direction="row">
                                            <Box
                                                backgroundColor="gray.50"
                                                backgroundImage={`url(${product.image})`}
                                                backgroundPosition="center"
                                                backgroundRepeat="no-repeat"
                                                backgroundSize="contain"
                                                borderRadius="sm"
                                                height={180}
                                                width={180}
                                                minHeight={180}
                                                minWidth={180}
                                            />
                                            <Stack>
                                                <Text fontSize={{ base: "2xl", lg: "lg", xl: "sm" }} fontWeight={500}>
                                                    {product.price.toLocaleString("es-Ar", { style: "currency", currency: "ARS" })}
                                                </Text>
                                                <Text>{product.title}</Text>
                                            </Stack>
                                        </Stack>
                                        <Text fontSize="sm">{product.location}</Text>
                                    </Stack>
                                </a>
                            </Link>
                        )}
                    }
            </Stack>
            </Center>
        </Box>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {

    try {
        const results = await api.search((query.q as string));
        return {
            props: {
                results
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