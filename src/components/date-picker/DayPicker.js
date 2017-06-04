import React, { Component } from 'react';
import { func, number } from 'prop-types';
import classNames from 'classnames';

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
            day: chosenDay,
            month,
            setDay,
            year,
        } = this.props;

        const numberOfDays = getDaysInMonth(new Date(year, month));

        let previousNumberOfDays;
        if (month === 0) {
            previousNumberOfDays = getDaysInMonth(new Date(year - 1, 11));
        } else {
            previousNumberOfDays = getDaysInMonth(new Date(year, month - 1));
        }

        let firstDayOfMonth = getDayOfWeek(new Date(year, month, 1, 12));
        if (firstDayOfMonth === 0) {
            firstDayOfMonth = 7; // americans..
        }
        let lastDayOfMonth = getDayOfWeek(new Date(year, month, numberOfDays, 12));
        if (lastDayOfMonth === 0) {
            lastDayOfMonth = 7; // why did it have to be americans?
        }

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
                firstDayOfMonth === 0 ? [] :
                    range(0, firstDayOfMonth - 1).map(day =>
                        <li
                            className={
                                classNames(
                                    'ninno-date-picker__day-list-item',
                                    'ninno-date-picker__day-list-item--filler',
                                )
                            }
                            key={`filler-${previousNumberOfDays - day}`}
                        >
                            {previousNumberOfDays - day}
                        </li>,
                    ).reverse(),
            )
            .concat(
                range(1, numberOfDays + 1).map(day =>
                    <li
                        className="ninno-date-picker__day-list-item"
                        key={`day-${day}`}
                    >
                        <button
                            className={
                                classNames(
                                    'ninno-date-picker__day-button',
                                    { 'ninno-date-picker__day-button--chosen': day === chosenDay },
                                )
                            }
                            onClick={() => setDay(day)}
                        >
                            {day}
                        </button>
                    </li>,
                ),
            )
            .concat(
                lastDayOfMonth === 7 ? [] :
                    range(lastDayOfMonth, 7).map((_, index) =>
                        <li
                            className={
                                classNames(
                                    'ninno-date-picker__day-list-item',
                                    'ninno-date-picker__day-list-item--filler',
                                )
                            }
                            key={`filler-${index + 1}`}
                        >
                            {index + 1}
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
    day: number.isRequired,
    month: number.isRequired,
    setDay: func.isRequired,
    year: number.isRequired,
};

export default DayPicker;
