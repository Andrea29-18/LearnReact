import PropTypes from "prop-types";

export const CounterApp = ({value}) => {
    
    const handleClick = () => {
        console.log('handleClick');
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>

            <button onClick={ handleClick }>
                 +1
            </button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
};