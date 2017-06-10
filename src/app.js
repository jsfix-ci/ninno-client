import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import './less/styles.less';

import Root from './containers/Root';
import configureStore from './store/configureStore';

OfflinePluginRuntime.install();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const renderApp = Component => render(
    <Component store={store} history={history} />,
    window.document.getElementById('root'),
);

renderApp(Root);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        /* eslint-disable global-require */
        renderApp(require('./containers/Root').default);
        /* eslint-enable global-require */
    });
}
