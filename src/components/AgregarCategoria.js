import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AgregarCategoria = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            
            setCategorias( category => [inputValue, ...category]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            
                <input
                    type = "text"    
                    value = {inputValue}
                    onChange = { handleInputChange } 
                    placeholder = 'Busca imagenes....'
                />
           
        </form>
      
    )
}

AgregarCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}