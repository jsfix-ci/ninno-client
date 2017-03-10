import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SsnValidator from '../components/SsnValidator';

import { updateInputValue } from '../dispatchers';

function Validator(props) {
    const {
        formState,
        validator,
    } = props;

    return (
        <SsnValidator
          formState={formState}
          result={validator.result}
          updateInputValue={props.updateInputValue}
        />
    );
}

Validator.propTypes = {
    formState: PropTypes.shape({}).isRequired,
    updateInputValue: PropTypes.func.isRequired,
    validator: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
    formState: state.form,
    validator: state.validator,
});

export default connect(mapStateToProps, {
    updateInputValue,
})(Validator);
