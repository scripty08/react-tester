import React from 'react';

import { Container } from './Styles';

export const ReactTester = (props) => {
    const {
        color = '#fff',
    } = props;

    return (
        <Container color={color}>
            react-tester
        </Container>
    );
};
