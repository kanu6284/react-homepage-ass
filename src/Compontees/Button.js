import React from 'react';
import { AiOutlineCoffee } from 'react-icons/ai'; 

const buttonStyles = {
    button: {
        border: 'none',
        padding: '10px 20px', 
        margin: '5px', 
        marginLeft: '90px', 
        marginTop: '40px',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' 
    },
    icon: {
        marginRight: '10px' 
    }
};

export const Button = () => {
    return (
        <div>
            <button style={buttonStyles.button} type="button">
                <AiOutlineCoffee style={buttonStyles.icon} /> Ice Coffee
            </button>
            <button style={buttonStyles.button} type="button">
                <AiOutlineCoffee style={buttonStyles.icon} /> Hot Coffee
            </button>
            <button style={buttonStyles.button} type="button">
                <AiOutlineCoffee style={buttonStyles.icon} /> Arisan Coffee
            </button>
            <button style={buttonStyles.button} type="button">
                <AiOutlineCoffee style={buttonStyles.icon} /> Ice Mojito
            </button>
            <button style={buttonStyles.button} type="button">
                <AiOutlineCoffee style={buttonStyles.icon} /> Beverage
            </button>
        </div>
    );
};
