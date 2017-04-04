import React, { Component, PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';

import areIntlLocalesSupported from 'intl-locales-supported';

import SsnItem from './SsnItem';

/* eslint-disable global-require */
let DateTimeFormat;
if (areIntlLocalesSupported(['nb'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
} else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/nb');
}
/* eslint-enable global-require */

const paperStyle = {
    height: '100%',
    padding: 20,
};

const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0,
};

class SsnGenerator extends Component {

    constructor() {
        super();

        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        const {
            formState: {
                'generate-ssn': ssnValue,
            },
        } = this.props;

        if (ssnValue) {
            this.props.generateSsns(ssnValue);
        }
    }

    onInputChange(e, date) {
        this.props.updateInputValue('generate-ssn', date);
        this.props.generateSsns(date);
    }

    render() {
        const {
            copySsn,
            formState: {
                'generate-ssn': ssnValue,
            },
            result,
        } = this.props;

        return (
            <Paper style={paperStyle}>
                <form>
                    <h1>Generering av fødselsnummer</h1>
                    <DatePicker
                      DateTimeFormat={DateTimeFormat}
                      hintText="Velg fødselsdato"
                      locale="nb"
                      name="generate-ssn"
                      onChange={this.onInputChange}
                      value={ssnValue}
                    />
                    <ul style={listStyle}>
                        {result.map(ssn =>
                            <SsnItem
                              copySsn={copySsn}
                              key={ssn.ssn}
                              ssn={ssn}
                            />,
                        )}
                    </ul>
                </form>
            </Paper>
        );
    }
}

SsnGenerator.propTypes = {
    copySsn: PropTypes.func.isRequired,
    formState: PropTypes.shape({}).isRequired,
    generateSsns: PropTypes.func.isRequired,
    result: PropTypes.arrayOf(PropTypes.shape({
        copied: PropTypes.bool.isRequired,
        ssn: PropTypes.string.isRequired,
    })).isRequired,
    updateInputValue: PropTypes.func.isRequired,
};

export default SsnGenerator;
