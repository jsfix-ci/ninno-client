import React, { Component, PropTypes } from 'react';

import { Grid, GridRow, GridCol } from '~/components/grid';

import { gender, month } from '../utils';

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
            <Grid>
                <GridRow>
                    <GridCol sm={12} center={true}>
                        <h2>Validering av fødselsnummer</h2>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol sm={{ cols: 8, offset: 4 }}>
                        <form>
                            <input
                                name="validate-ssn"
                                onChange={this.onInputChange}
                                value={ssnValue}
                            />
                        </form>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol sm={{ cols: 8, offset: 4 }}>
                        {!result.invalid &&
                            <div>
                                <h2>Født</h2>
                                <p>
                                    {result.day}. {month(result.month)} {result.year}
                                </p>
                                <h2>Kjønn</h2>
                                <p>
                                    {gender(result.gender)}
                                </p>
                            </div>
                        }
                    </GridCol>
                </GridRow>
            </Grid>
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
