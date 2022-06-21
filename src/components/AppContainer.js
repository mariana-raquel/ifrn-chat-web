import React from 'react';
import Container from '@mui/material/Container';

export const AppContainer = props => 
    <Container  sx = {{ margin : '10px'}}>
        {props.children}
    </Container>;
