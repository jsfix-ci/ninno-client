import React from 'react';
import TextField from 'material-ui/TextField';

function Validator() {
    return (
        <form>
            <h1>Validering av fødselsnummer</h1>
            <TextField
              hintText="Fyll inn fødselsnummer"
            />
        </form>
    );
}

export default Validator;
