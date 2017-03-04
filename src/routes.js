import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import Validator from './containers/Validator';

export const validatorPath = '/validering';

export default (
    <Route path="/" component={App}>
        <Route path={validatorPath} component={Validator} />
    </Route>
);
