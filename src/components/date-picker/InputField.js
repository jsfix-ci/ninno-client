import React from 'react';
import { instanceOf } from 'prop-types';

import format from 'date-fns/format';

function InputField(props) {
    const { date } = props;

    return (
        <div className="ninno-date-picker__component">
            <input
                className="ninno-date-picker__date-input"
                placeholder="YYYY-MM-DD"
                readOnly={true}
                value={format(date, 'YYYY-MM-DD')}
            />
        </div>
    );
}

InputField.propTypes = {
    date: instanceOf(Date).isRequired,
};

export default InputField;
