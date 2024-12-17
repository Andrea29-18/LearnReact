//Sirve para obligar a que se envie un parametro a un componente
import Proptypes from 'prop-types';

export const Props = ( { title } ) => {
    return (
        <>
           <h1>{title}</h1>
        </>
    );
};

Props.propTypes = {
    title: Proptypes.string.isRequired
};