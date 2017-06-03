import React, { Component } from 'react';
import { arrayOf, bool, func, instanceOf, shape, string } from 'prop-types';

import isEqual from 'date-fns/is_equal';
import isValid from 'date-fns/is_valid';

import { DatePicker } from '~/components/date-picker';
import { Grid, GridRow, GridCol } from '~/components/grid';

import { GENDERS } from '../utils';
import SsnItem from './SsnItem';

class SsnGenerator extends Component {

    componentDidMount() {
        this.props.generateSsns(this.props.date);
    }

    componentWillReceiveProps(nextProps) {
        if (!isEqual(nextProps.date, this.props.date) && isValid(nextProps.date)) {
            this.props.generateSsns(nextProps.date);
        }
    }

    render() {
        const {
            copySsn,
            result,
        } = this.props;

        const maleSsns = result.filter(ssn => ssn.gender === GENDERS.M);
        const femaleSsns = result.filter(ssn => ssn.gender === GENDERS.F);

        return (
            <Grid>
                <GridRow>
                    <GridCol sm={12} center={true}>
                        <h1>Generering av fødselsnummer</h1>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol sm={{ cols: 8, offset: 4 }}>
                        <DatePicker />
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol sm={6} center={true}>
                        <h2>Menn</h2>
                    </GridCol>
                    <GridCol sm={6} center={true}>
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
    copySsn: func.isRequired,
    date: instanceOf(Date).isRequired,
    generateSsns: func.isRequired,
    result: arrayOf(shape({
        copied: bool.isRequired,
        ssn: string.isRequired,
    })).isRequired,
};

export default SsnGenerator;
