import React from 'react';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    name: string;
    classes?: string;
}

const Button: React.FC<ButtonProps> = ({ type, name, classes }) => {
    return (
        <button type={type} className={classes}>{name}</button>
    );
}

export default Button;