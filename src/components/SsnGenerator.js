import React, { Component, PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import areIntlLocalesSupported from 'intl-locales-supported';

import { GENDERS } from '../utils';
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

class SsnGenerator extends Component {

    constructor() {
        super();

        this.onInputChange = this.onInputChange.bind(this);
        this.makeTableBody = this.makeTableBody.bind(this);
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

    makeTableBody(femaleSsns, maleSsns) {
        const diff = femaleSsns.length - maleSsns.length;
        if (diff) {
            for (let i = 0, l = Math.abs(diff); i < l; i += 1) {
                if (diff > 0) {
                    maleSsns.push({});
                } else {
                    femaleSsns.push({});
                }
            }
        }

        return (
            <TableBody displayRowCheckbox={false}>
                {femaleSsns.map((_, index) => (
                    <TableRow key={_.ssn || index}>
                        <TableRowColumn>
                            <SsnItem
                              copySsn={this.props.copySsn}
                              ssn={femaleSsns[index]}
                            />
                        </TableRowColumn>
                        <TableRowColumn>
                            <SsnItem
                              copySsn={this.props.copySsn}
                              ssn={maleSsns[index]}
                            />
                        </TableRowColumn>
                    </TableRow>
                ))}
            </TableBody>
        );
    }

    render() {
        const {
            copySsn,
            formState: {
                'generate-ssn': ssnValue,
            },
            result,
        } = this.props;

        const maleSsns = result.filter(ssn => ssn.gender === GENDERS.M);
        const femaleSsns = result.filter(ssn => ssn.gender === GENDERS.F);

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
                    <Table>
                        <TableHeader
                          adjustForCheckbox={false}
                          displaySelectAll={false}
                        >
                            <TableRow>
                                <TableHeaderColumn>
                                    Kvinne
                                </TableHeaderColumn>
                                <TableHeaderColumn>
                                    Mann
                                </TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        {this.makeTableBody(femaleSsns, maleSsns, copySsn)}
                    </Table>
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
