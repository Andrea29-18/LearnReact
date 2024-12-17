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

// Sino viene anda del padre, se le asigna un valor por defecto
Props.defaultProps = {
    title: 'Titulo por defecto'
}