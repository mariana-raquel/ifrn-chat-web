import React from 'react';
import Button from '@mui/material/Button';

export const AppButton = props => {
    let href_button = props.href ? props.href : null;
    let color_button = props.color ? props.color : 'primary';
    let handle_click = props.onClick ? props.onClick : (() => null);

    return (
        <Button
            href={href_button}
            color={color_button}
            title={props.title}
            onClick={handle_click}
            {...props}
            >
                {props.value}
        </Button>
    );
};
