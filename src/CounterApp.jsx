import PropTypes from 'prop-types';
import { React, useState} from 'react';


export const App = ({ value }) => {
    
    const [ counter, setCounter ] = useState( value );
    
    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    const handleReset = () => {
        setCounter( () => value );
    }

    const handleRemove = () => {
        setCounter( counter - 1 );
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>

            <button onClick= { handleAdd }>
                +1
            </button>
            <button onClick= { handleReset }>
                Reset
            </button>
            <button onClick= { handleRemove }>
                -1
            </button>
        </>
    )
}

App.propTypes = {
    value: PropTypes.number.isRequired,
}

App.defaultProps = {
    value: 0,
}
