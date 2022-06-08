import React from 'react';
import TextField from '@mui/material/TextField';

export const AppInput = ({ label, type, title }) => (
<div>
    <TextField 
        label={label}
        type={type}
        helperText={title}
        fullWidth
    />
    
</div>);
