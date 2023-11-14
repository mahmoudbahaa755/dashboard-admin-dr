import React from 'react';

interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    name: string;
    classes?: string;
}

const Button: React.FC<ButtonProps> = ({ type, name, classes }) => {
    return (
        <button type={type} className={classes ||"mt-2 cursor-pointer text-center py-2 px-4 rounded-lg bg-blue-500 text-white hover:bg-blue-700 transition-colors duration-200"}>{name}</button>
    );
}

export default Button;