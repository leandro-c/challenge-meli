import React from 'react'
import { GetServerSideProps } from 'next'
import api from '../product/api';
import { Product } from '../product/types'

interface Props {
    results: Product[]
}

const IndexPage: React.FC<Props> = ({ results }) => {

    return <div> {results.map((elemet,key) => {
        return (
            <pre key={key}>{JSON.stringify(elemet, null, 0)}</pre>
        )
    })}  </div>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const results = await api.search(query.q as string);

    return {
        props: {
            results,
        },
    };
};

export default IndexPage