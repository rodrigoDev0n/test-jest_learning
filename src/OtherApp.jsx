import React from 'react';
import PropTypes from 'prop-types';

const newMessage = {
    message: 'Hola Mundo',
    title: 'Rodrigo',
};

const suma = (num1, num2) => num1 + num2; 

const FirstApp = ({ title, subtitle }) => {
    return (
        <>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
        </>
    );
}

export default FirstApp;

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    title: 'No existe el titulo',
    subtitle: 'No existe el subtitulo'
}