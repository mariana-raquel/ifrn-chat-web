import React from 'react';
export const AppInput = ({ label, type, placeholder }) => (<div>
    <label> {label} </label>
    <input type={type} placeholder={placeholder}></input>
</div>);
