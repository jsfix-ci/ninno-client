import React, { Component } from 'react';
import { func, number } from 'prop-types';

class YearPicker extends Component {

    constructor() {
        super();

        this.onYearChange = this.onYearChange.bind(this);
    }

    onYearChange(event) {
        const year = Number(event.target.value);

        if (!Number.isNaN(year)) {
            this.props.setYear(year);
        }
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
                <input
                    className="ninno-date-picker__year-input"
                    maxLength="4"
                    name="year"
                    onChange={this.onYearChange}
                    value={year}
                />
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
