import React, { Component, PropTypes } from 'react';

import parse from 'date-fns/parse';

import { Grid, GridRow, GridCol } from '~/components/grid';

import { GENDERS } from '../utils';
import SsnItem from './SsnItem';

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

    onInputChange(e) {
        const {
            target: {
                value,
            },
        } = e;
        this.props.updateInputValue('generate-ssn', value);
        if (value.length === 10) {
            this.props.generateSsns(parse(value));
        }
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
            <Grid>
                <GridRow>
                    <GridCol sm={12} center>
                        <h1>Generering av fødselsnummer</h1>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol sm={{ cols: 8, offset: 4 }}>
                        <form>
                            <input
                              onChange={this.onInputChange}
                              placeholder="YYYY-MM-DD"
                              value={ssnValue}
                            />
                        </form>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol sm={6} center>
                        <h2>Menn</h2>
                    </GridCol>
                    <GridCol sm={6} center>
                        <h2>Kvinner</h2>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol sm={6}>
                        <ul className="ninno-fnr-list">
                            {maleSsns.map(ssn =>
                                <SsnItem key={ssn.ssn} ssn={ssn} copySsn={copySsn} />,
                            )}
                        </ul>
                    </GridCol>
                    <GridCol sm={6}>
                        <ul className="ninno-fnr-list">
                            {femaleSsns.map(ssn =>
                                <SsnItem key={ssn.ssn} ssn={ssn} copySsn={copySsn} />,
                            )}
                        </ul>
                    </GridCol>
                </GridRow>
            </Grid>
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
