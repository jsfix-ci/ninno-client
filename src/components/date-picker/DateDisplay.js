import React from 'react';
import { instanceOf } from 'prop-types';

import format from 'date-fns/format';

function DateDisplay(props) {
    const { date } = props;

    return (
        <div className="ninno-date-picker__component">
            <span className="ninno-date-picker__date-display">
                Valgt dato: <strong>{format(date, 'DD.MM.YYYY')}</strong>
            </span>
        </div>
    );
}

DateDisplay.propTypes = {
    date: instanceOf(Date).isRequired,
};

export default DateDisplay;
