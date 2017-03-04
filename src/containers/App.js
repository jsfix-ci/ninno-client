import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';

import AppMenu from '../components/AppMenu';
import { validatorPath } from '../routes';

injectTapEventPlugin();

class App extends Component {

    constructor() {
        super();

        this.openDrawer = this.openDrawer.bind(this);
        this.openValidator = this.openValidator.bind(this);

        this.state = {
            drawerOpen: false,
        };
    }

    openDrawer(open) {
        this.setState({
            drawerOpen: open !== false,
        });
    }

    openValidator() {
        this.openDrawer(false);
        this.props.router.push(validatorPath);
    }

    render() {
        const { children } = this.props;
        const { drawerOpen } = this.state;
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                      title="Fødselsnummerhjelpen"
                      iconElementRight={<AppMenu />}
                      onLeftIconButtonTouchTap={this.openDrawer}
                    />
                    <Drawer
                      docked={false}
                      width={300}
                      open={drawerOpen}
                      onRequestChange={this.openDrawer}
                    >
                        <MenuItem onTouchTap={this.openValidator}>
                            Validering av fødselsnummer
                        </MenuItem>
                    </Drawer>
                    {children}
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
    children: PropTypes.node.isRequired,
    router: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    state,
});

export default connect(mapStateToProps, {
})(withRouter(App));
