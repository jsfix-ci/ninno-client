import React, { Component, PropTypes } from 'react';

import { Grid, GridRow, GridCol } from '~/components/grid';

import { gender, month } from '../utils';

class SsnValidator extends Component {

    constructor() {
        super();

        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
            ssn: '',
        };
    }

    componentDidMount() {
        let ssnValue;

        if (ssnValue) {
            this.props.validateSsn(ssnValue);
        }
    }

    onInputChange(e) {
        this.setState({
            ssn: e.target.value,
        });
        this.props.validateSsn(e.target.value);
    }

    render() {
        const {
            result,
        } = this.props;

        const {
            ssn,
        } = this.state;

        return (
            <Grid>
                <GridRow>
                    <GridCol sm={12} center={true}>
                        <h2>Validering av fødselsnummer</h2>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol sm={12} center={true}>
                        <form>
                            <input
                                className="ninno-validator__input"
                                name="ssn"
                                onChange={this.onInputChange}
                                value={ssn}
                            />
                        </form>
                    </GridCol>
                </GridRow>
                <GridRow>
                    <GridCol sm={12} center={true}>
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
                        {result.invalid &&
                            <p>Dette er ikke et gyldig fødselsnummer</p>
                        }
                    </GridCol>
                </GridRow>
            </Grid>
        );
    }
}

SsnValidator.propTypes = {
    result: PropTypes.shape({
        day: PropTypes.number,
        month: PropTypes.number,
        year: PropTypes.number,
        invalid: PropTypes.bool.isRequired,
    }).isRequired,
    validateSsn: PropTypes.func.isRequired,
};

export default SsnValidator;
