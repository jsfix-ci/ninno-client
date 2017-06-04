import React, { Component } from 'react';
import { func, number } from 'prop-types';

import { range } from '~/utils';

class YearPicker extends Component {

    constructor() {
        super();

        this.onYearChange = this.onYearChange.bind(this);
    }

    onYearChange(event) {
        this.props.setYear(Number(event.target.value));
    }

    render() {
        const {
            decreaseYear,
            increaseYear,
            year,
        } = this.props;

        return (
            <div className="ninno-date-picker__component">
                <button
                    aria-label="forrige år"
                    className="ninno-date-picker__skip-button ninno-date-picker__skip-button--previous"
                    onClick={decreaseYear}
                    type="button"
                >
                    &nbsp;
                </button>
                <select
                    className="ninno-date-picker__year-input"
                    name="year"
                    onChange={this.onYearChange}
                    value={year}
                >
                    {range(1854, 2040).map(_year =>
                        <option value={_year} key={_year}>{_year}</option>,
                    )}
                </select>
                <button
                    aria-label="neste år"
                    className="ninno-date-picker__skip-button ninno-date-picker__skip-button--next"
                    onClick={increaseYear}
                    type="button"
                >
                    &nbsp;
                </button>
            </div>
        );
    }
}

YearPicker.propTypes = {
    decreaseYear: func.isRequired,
    increaseYear: func.isRequired,
    year: number.isRequired,
    setYear: func.isRequired,
};

export default YearPicker;
