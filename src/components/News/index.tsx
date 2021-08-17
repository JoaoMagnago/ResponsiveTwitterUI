import React from 'react'

import { Container } from './styles';

interface Props {
    title: string;
    topic: string;
}

const News = ({ title, topic }: Props) => {
    return (
        <Container>
            <span>{title}</span>
            <strong>{topic}</strong>
        </Container>
    )
}

export default News;
