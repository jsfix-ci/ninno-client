import React, { Component } from 'react';
import { func, number } from 'prop-types';

import getDaysInMonth from 'date-fns/get_days_in_month';
import getDayOfWeek from 'date-fns/get_day';

import { range } from '~/utils';

class DayPicker extends Component {

    constructor() {
        super();

        this.renderDays = this.renderDays.bind(this);
    }

    renderDays() {
        const {
            month,
            setDay,
            year,
        } = this.props;

        const firstDayOfWeek = (getDayOfWeek(new Date(year, month, 1)) + 7) % 8;
        const numberOfDays = getDaysInMonth(new Date(year, month));

        return ['man', 'tir', 'ons', 'tor', 'fre', 'lør', 'søn']
            .map(day =>
                <li
                    className="ninno-date-picker__day-list-item"
                    key={`header-${day}`}
                >
                    {day}
                </li>,
            )
            .concat(
                firstDayOfWeek === 0 ? [] :
                    range(1, firstDayOfWeek).map(day =>
                        <li
                            className="ninno-date-picker__day-list-item"
                            key={`filler-${day}`}
                        >
                            &nbsp;
                        </li>,
                    ),
            )
            .concat(
                range(1, numberOfDays + 1).map(day =>
                    <li
                        className="ninno-date-picker__day-list-item"
                        key={`day-${day}`}
                    >
                        <button
                            className="ninno-date-picker__day-button"
                            onClick={() => setDay(day)}
                        >
                            {day}
                        </button>
                    </li>,
                ),
            );
    }

    render() {
        return (
            <div className="ninno-date-picker__component">
                <ol className="ninno-date-picker__day-list">
                    {this.renderDays()}
                </ol>
            </div>
        );
    }
}

DayPicker.propTypes = {
    month: number.isRequired,
    setDay: func.isRequired,
    year: number.isRequired,
};

export default DayPicker;
