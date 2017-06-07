import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as dispatchers from '~/dispatchers';

const MAX_AGE = new Date().getFullYear() - 1854;

class AgePicker extends Component {

    constructor() {
        super();

        this.onAgeChange = this.onAgeChange.bind(this);

        this.state = {
            age: 20,
        };
    }

    onAgeChange(e) {
        this.setState({
            age: e.target.value,
        });
        this.props.setAge(Number(e.target.value))
    }

    render() {
        const { age } = this.state;

        return (
            <div>
                <input
                    className="ninno-date-picker__age-input"
                    name="age"
                    onChange={this.onAgeChange}
                    type="text"
                    value={age}
                />
                <input
                    className="ninno-date-picker__age-slider"
                    min="0"
                    max={MAX_AGE}
                    onChange={this.onAgeChange}
                    step="1"
                    type="range"
                    value={age}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
    setAge: dispatchers.setAge,
})(AgePicker);
