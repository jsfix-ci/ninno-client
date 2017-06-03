import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Grid, GridRow, GridCol } from '~/components/grid';

import { generatorPath, validatorPath } from '../routes';

class App extends Component {

    constructor() {
        super();

        this.openGenerator = this.openGenerator.bind(this);
        this.openValidator = this.openValidator.bind(this);
    }

    openValidator() {
        this.props.router.push(validatorPath);
    }

    openGenerator() {
        this.props.router.push(generatorPath);
    }

    render() {
        const { children } = this.props;
        return (
            <div className="ninno-container">
                <Grid>
                    <GridRow>
                        <GridCol sm={12} center={true}>
                            <nav>
                                <ul className="ninno-nav">
                                    <li className="ninno-nav__item">
                                        <button
                                            className="ninno-nav__button"
                                            onClick={this.openValidator}
                                        >
                                            Validering av fødselsnummer
                                        </button>
                                    </li>
                                    <li className="ninno-nav__item">
                                        <button
                                            className="ninno-nav__button"
                                            onClick={this.openGenerator}
                                        >
                                            Generering av fødselsnummer
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </GridCol>
                    </GridRow>
                </Grid>
                {children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node,
    router: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

App.defaultProps = {
    children: <div />,
};

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps, {
})(withRouter(App));
