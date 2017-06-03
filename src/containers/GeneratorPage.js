import React from 'react';
import { func, shape, instanceOf } from 'prop-types';
import { connect } from 'react-redux';

import SsnGenerator from '../components/SsnGenerator';

import { copySsn, generateSsns, updateInputValue } from '../dispatchers';

function GeneratorPage(props) {
    const {
        date,
        generator,
    } = props;

    return (
        <SsnGenerator
            copySsn={props.copySsn}
            date={date}
            generateSsns={props.generateSsns}
            result={generator.ssns}
        />
    );
}

GeneratorPage.propTypes = {
    copySsn: func.isRequired,
    date: instanceOf(Date).isRequired,
    generateSsns: func.isRequired,
    generator: shape({}).isRequired,
};

const mapStateToProps = state => ({
    date: new Date(state.datePicker.year, state.datePicker.month, state.datePicker.day),
    generator: state.generator,
});

export default connect(mapStateToProps, {
    copySsn,
    generateSsns,
    updateInputValue,
})(GeneratorPage);
