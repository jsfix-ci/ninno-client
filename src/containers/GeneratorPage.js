import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SsnGenerator from '../components/SsnGenerator';

import { copySsn, generateSsns, updateInputValue } from '../dispatchers';

function GeneratorPage(props) {
    const {
        formState,
        generator,
    } = props;

    return (
        <SsnGenerator
          copySsn={props.copySsn}
          formState={formState}
          generateSsns={props.generateSsns}
          result={generator.ssns}
          updateInputValue={props.updateInputValue}
        />
    );
}

GeneratorPage.propTypes = {
    copySsn: PropTypes.func.isRequired,
    formState: PropTypes.shape({}).isRequired,
    generateSsns: PropTypes.func.isRequired,
    updateInputValue: PropTypes.func.isRequired,
    generator: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
    formState: state.form,
    generator: state.generator,
});

export default connect(mapStateToProps, {
    copySsn,
    generateSsns,
    updateInputValue,
})(GeneratorPage);
