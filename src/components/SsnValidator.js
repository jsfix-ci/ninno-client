import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import months from '../utils/months';

const paperStyle = {
    height: '100%',
    padding: 20,
};

class SsnValidator extends Component {

    constructor() {
        super();

        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        const {
            formState: {
                'validate-ssn': ssnValue,
            },
        } = this.props;

        if (ssnValue) {
            this.props.validateSsn(ssnValue);
        }
    }

    onInputChange(e) {
        this.props.updateInputValue(e.target.name, e.target.value);
        this.props.validateSsn(e.target.value);
    }

    render() {
        const {
            formState: {
                'validate-ssn': ssnValue,
            },
            result,
        } = this.props;

        return (
            <Paper style={paperStyle}>
                <form>
                    <h1>Validering av fødselsnummer</h1>
                    <TextField
                      hintText="Fyll inn fødselsnummer"
                      name="validate-ssn"
                      onChange={this.onInputChange}
                      value={ssnValue}
                    />
                    {!result.invalid &&
                        <div>
                            <h2>Født</h2>
                            <p>
                                {result.day}. {months(result.month)} {result.year}
                            </p>
                        </div>
                    }
                </form>
            </Paper>
        );
    }
}

SsnValidator.propTypes = {
    updateInputValue: PropTypes.func.isRequired,
    formState: PropTypes.shape({
        'validate-ssn': PropTypes.string.isRequired,
    }).isRequired,
    result: PropTypes.shape({
        day: PropTypes.number,
        month: PropTypes.number,
        year: PropTypes.number,
        invalid: PropTypes.bool.isRequired,
    }).isRequired,
    validateSsn: PropTypes.func.isRequired,
};

export default SsnValidator;
