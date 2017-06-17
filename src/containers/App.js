import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Grid, GridRow, GridCol } from '~/components/grid';
import Header from '~/components/Header';

import { generatorPath, validatorPath } from '~/routes';

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
                        <GridCol sm={{ cols: 6, offset: 3 }} center={true}>
                            <div className="ninno-old-browser">
                                <p>
                                    Det ser ut som du bruker en eldre browser.
                                    Denne websiden er skrevet for moderne browsere og vil
                                    sannsynligvis ikke fungere optimalt
                                </p>
                            </div>
                        </GridCol>
                    </GridRow>
                    <GridRow>
                        <GridCol sm={12} center={true}>
                            <Header
                                openGenerator={this.openGenerator}
                                openValidator={this.openValidator}
                            />
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
