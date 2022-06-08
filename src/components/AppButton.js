import React from 'react';
import Button from '@mui/material/Button';

export const AppButton = props => (
<div>
    <Button variant="contained" href={props.href}>{props.value}</Button>
</div>);
