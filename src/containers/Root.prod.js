import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from '../routes';

const Root = ({ store, history }) => (
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
);

Root.propTypes = {
    store: PropTypes.shape({}).isRequired,
    history: PropTypes.shape({}).isRequired,
};
export default Root;
