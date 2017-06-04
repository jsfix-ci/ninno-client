import React from 'react';
import { func, number } from 'prop-types';
import { connect } from 'react-redux';

import * as dispatchers from '~/dispatchers';

import DayPicker from './DayPicker';
import DateDisplay from './DateDisplay';
import MonthPicker from './MonthPicker';
import YearPicker from './YearPicker';

function DatePicker(props) {
    const {
        day,
        decreaseMonth,
        decreaseYear,
        increaseMonth,
        increaseYear,
        month,
        setDay,
        setMonth,
        setYear,
        year,
    } = props;

    const date = new Date(year, month, day);

    return (
        <div className="ninno-date-picker">
            <YearPicker
                decreaseYear={decreaseYear}
                increaseYear={increaseYear}
                setYear={setYear}
                year={year}
            />
            <MonthPicker
                decreaseMonth={decreaseMonth}
                increaseMonth={increaseMonth}
                setMonth={setMonth}
                month={month}
            />
            <DayPicker
                month={month}
                setDay={setDay}
                year={year}
            />
            <DateDisplay date={date} />
        </div>
    );
}

DatePicker.propTypes = {
    day: number.isRequired,
    decreaseMonth: func.isRequired,
    decreaseYear: func.isRequired,
    increaseMonth: func.isRequired,
    increaseYear: func.isRequired,
    month: number.isRequired,
    setDay: func.isRequired,
    setMonth: func.isRequired,
    setYear: func.isRequired,
    year: number.isRequired,
};

const mapStateToProps = state => ({
    day: state.datePicker.day,
    month: state.datePicker.month,
    year: state.datePicker.year,
});

export default connect(mapStateToProps, {
    decreaseMonth: dispatchers.decreaseMonth,
    decreaseYear: dispatchers.decreaseYear,
    increaseMonth: dispatchers.increaseMonth,
    increaseYear: dispatchers.increaseYear,
    setDay: dispatchers.setDay,
    setMonth: dispatchers.setMonth,
    setYear: dispatchers.setYear,
})(DatePicker);
