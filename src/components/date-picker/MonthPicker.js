import React, { Component } from 'react';
import { func, number } from 'prop-types';

import { MONTHS } from '~/utils';

class MonthPicker extends Component {

    constructor() {
        super();

        this.onMonthChange = this.onMonthChange.bind(this);
    }

    onMonthChange(e) {
        this.props.setMonth(Number(e.target.value));
    }

    render() {
        const {
            decreaseMonth,
            increaseMonth,
            month,
        } = this.props;

        return (
            <div className="ninno-date-picker__component">
                <button
                    aria-label="forrige måned"
                    className="ninno-date-picker__skip-button ninno-date-picker__skip-button--previous"
                    onClick={decreaseMonth}
                    type="button"
                >
                    &nbsp;
                </button>
                <select
                    className="ninno-date-picker__month-input"
                    name="month"
                    onChange={this.onMonthChange}
                    value={month}
                >
                    {Object.entries(MONTHS).map(([key, name]) =>
                        <option value={key} key={key}>{name}</option>,
                    )}
                </select>
                <button
                    aria-label="neste måned"
                    className="ninno-date-picker__skip-button ninno-date-picker__skip-button--next"
                    onClick={increaseMonth}
                    type="button"
                >
                    &nbsp;
                </button>
            </div>
        );
    }
}

MonthPicker.propTypes = {
    decreaseMonth: func.isRequired,
    increaseMonth: func.isRequired,
    month: number.isRequired,
    setMonth: func.isRequired,
};

export default MonthPicker;
