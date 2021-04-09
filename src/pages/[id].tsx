import React from 'react';
import { GetServerSideProps } from 'next';
import api from '../product/api';
import { Product } from '../product/types';
import { Box, Stack } from '@chakra-ui/react';

interface Props {
    result: Product;
}

const IndexPage: React.FC<Props> = ({ result }) => {

    return (
        <Box padding={4}>
            <Stack width="100%" backgroundColor="white" borderRadius={2} boxShadow="sm" padding={4}>
               <pre>{JSON.stringify(result,null,4)}</pre>
            </Stack>
        </Box>
    )
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const result = await api.fetch((query.id as string));

    return {
        props: {
            result,
        }
    };
};

export default IndexPage;