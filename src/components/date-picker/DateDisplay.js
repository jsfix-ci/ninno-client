import React from 'react';
import { instanceOf } from 'prop-types';

import differenceInYears from 'date-fns/difference_in_years';
import format from 'date-fns/format';

function DateDisplay(props) {
    const { date } = props;

    const age = differenceInYears(new Date(), date);

    return (
        <div>
            <div className="ninno-date-picker__component">
                <span className="ninno-date-picker__date-display">
                    Valgt dato: <strong>{format(date, 'DD.MM.YYYY')}</strong>
                </span>
            </div>
            <div className="ninno-date-picker__component">
                <span className="ninno-date-picker__date-display">
                    Valgt alder: <strong>{age} år</strong>
                </span>
            </div>
        </div>
    );
}

DateDisplay.propTypes = {
    date: instanceOf(Date).isRequired,
};

export default DateDisplay;
