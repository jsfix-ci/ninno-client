import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import ValidatorPage from './containers/ValidatorPage';

export const validatorPath = '/validering';

export default (
    <Route path="/" component={App}>
        <Route path={validatorPath} component={ValidatorPage} />
    </Route>
);
